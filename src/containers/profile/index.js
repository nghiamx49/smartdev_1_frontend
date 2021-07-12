import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import imgUserDefault from '../../assests/img/user-default.png'
import SlidebarOfProfile from '../../components/slidebarOfProfile'
import * as UP from './style'
import apiClient from '../../apiServices/axiosClient'
import yup from './yupGlobal'
import { storage } from '../../firebase/config'
import { updateAvatarRequest } from '../../actions/authenticateAction';

const userSchema = yup.object().shape({
    full_name: yup
        .string()
        .required("tên không được bỏ trống")
        .full_name("tên không đúng định dạng. vui lòng nhập lai"),
    phone_number: yup
        .string()
        .required("số điện thoại không được bỏ trống")
        .phone_number("số điên thoại không đúng định dạng. vui lòng nhập lai"),
    address: yup
        .string()
        .required("địa chỉ không được bỏ trống"),
    zipcode: yup
        .string()
        .required("zipcode không được bỏ trống")
        .zipcode("zipcode không đúng định dạng. vui lòng nhập lai"),
});

const UserProfile = ({token,updateAvatar}) => {
    const [data, setData] = useState({});

    const { apiClientGet } = apiClient;
    const { apiClientPost } = apiClient;


    const { register, setValue, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            full_name: data?.full_name,
            phone_number: data?.phone_number,
            address: data?.address,
            zipcode: data?.zipcode
        },
        resolver: yupResolver(userSchema)
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await apiClientGet('/user/profile', token);
                const fields = ['full_name', 'phone_number', 'address', 'zipcode'];
                fields.forEach(field => setValue(field, data.data[field]));
                setData(data.data);
            } catch (error) {
                console.log(error)
            }
        }
        getData();
    }, []);

    const onSubmit = (dataSubmit) => {
        const user = {
            ...data,
            full_name: dataSubmit.full_name,
            phone_number: dataSubmit.phone_number,
            address: dataSubmit.address,
            zipcode: dataSubmit.zipcode,
        }
        updateUser(user);
        updateAvatar(user.avatar_source)
    };

    const updateUser = async (user) => {
        const result = await apiClientPost('/user/update_profile', user, token);
        if (result.status === 200) {
            return toast.success(result.message);
        }
        return toast.warn(result.message);
    }

    const handleChange = (e) => {
        if (e.target.files[0]) {
            const uploadTask = storage.ref(`images/${e.target.files[0].name}`).put(e.target.files[0]);
            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(e.target.files[0].name)
                        .getDownloadURL()
                        .then(url => {
                            setData({ ...data, avatar_source: url })
                        });
                }
            )
        }
    };

    return (
        <UP.Layout>
            <UP.Container>
                <SlidebarOfProfile />
                <UP.Main>
                    <UP.ProfileTop>
                        <UP.ProfileTilte>Hồ sơ của tôi </UP.ProfileTilte>
                        <UP.ProfileDescribe>Quản lý thông tin hồ sơ để bảo mật tài khoản</UP.ProfileDescribe>
                    </UP.ProfileTop>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <UP.ProfileBottom>

                            <UP.ProfileBottomLeft>
                                <UP.ProfileFormRow>
                                    <UP.ProfileFormName>Tên đăng nhập:</UP.ProfileFormName>
                                    <p>{data.username}</p>
                                </UP.ProfileFormRow>

                                <UP.ProfileFormRow>
                                    <UP.ProfileFormName>Tên:</UP.ProfileFormName>
                                    <UP.ProfileInput type="text" {...register("full_name")} />
                                </UP.ProfileFormRow>
                                {errors.full_name &&
                                    <UP.ProfileFormRow>
                                        <UP.ProfileFormName></UP.ProfileFormName>
                                        <UP.Error>{errors.full_name?.message}</UP.Error>
                                    </UP.ProfileFormRow>
                                }

                                <UP.ProfileFormRow>
                                    <UP.ProfileFormName>Số điện thoại :</UP.ProfileFormName>
                                    <UP.ProfileInput type="text" {...register("phone_number")} />
                                </UP.ProfileFormRow>
                                {errors.phone_number &&
                                    <UP.ProfileFormRow>
                                        <UP.ProfileFormName></UP.ProfileFormName>
                                        <UP.Error>{errors.phone_number?.message}</UP.Error>
                                    </UP.ProfileFormRow>
                                }

                                <UP.ProfileFormRow>
                                    <UP.ProfileFormName>Địa chỉ :</UP.ProfileFormName>
                                    <UP.ProfileInput type="text" {...register("address")} />
                                </UP.ProfileFormRow>
                                {errors.address &&
                                    <UP.ProfileFormRow>
                                        <UP.ProfileFormName></UP.ProfileFormName>
                                        <UP.Error>{errors.address?.message}</UP.Error>
                                    </UP.ProfileFormRow>
                                }

                                <UP.ProfileFormRow>
                                    <UP.ProfileFormName>Zipcode:</UP.ProfileFormName>
                                    <UP.ProfileInput type="text" {...register("zipcode")} />
                                    {/* <p>{data.zipcode}</p> */}
                                </UP.ProfileFormRow>
                                {errors.zipcode &&
                                    <UP.ProfileFormRow>
                                        <UP.ProfileFormName></UP.ProfileFormName>
                                        <UP.Error>{errors.zipcode?.message}</UP.Error>
                                    </UP.ProfileFormRow>
                                }

                                <UP.ProfileFormRow>
                                    <UP.ProfileFormName></UP.ProfileFormName>
                                    <UP.ProfileButton type="submit">Lưu</UP.ProfileButton>
                                </UP.ProfileFormRow>
                            </UP.ProfileBottomLeft>
                            <UP.ProfileBottomRight>
                                <UP.ProfileAvata src={data.avatar_source || imgUserDefault} alt="" />
                                <label htmlFor="avatar">Chọn ảnh</label>
                                <input type="file" name="avatar" onChange={handleChange} id="avatar" accept="image/*" />
                                <p>Dụng lượng file tối đa 1 MB </p>
                                <p>Định dạng:.JPEG, .PNG</p>
                            </UP.ProfileBottomRight>
                        </UP.ProfileBottom>
                    </form>
                </UP.Main>
            </UP.Container>
        </UP.Layout>
    )
}

const mapStateToProp = state => {
    return {
        token: state.authenticateReducer.token
    }
}

const mapDispatchToProps = {
    updateAvatar: updateAvatarRequest
};
// const mapDispatchToProps = dispatch =>{
//     return {
//         updateAvatar: (avatar_source) => dispatch(updateAvatarRequest(avatar_source))
//     }
// };

export default connect(mapStateToProp,mapDispatchToProps)(UserProfile)