import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

import imgUserDefault from '../../assests/img/user-default.png'
import SlidebarOfProfile from '../../components/slidebarOfProfile'
import * as UP from './style'
import getCLient from '../../apiServices/axiosClient'

const userSchema = yup.object().shape({
    full_name: yup.string().required("username is required"),
    phone_number: yup.string().required("phone is requrired"),
});

const UserProfile = (props) => {
    const [data, setData] = useState({})

    const { register, watch, setValue, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            full_name: data?.full_name,
            phone_number: data?.phone_number,
            address: data?.address
        },
        resolver: yupResolver(userSchema)
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getCLient('/user/profile', props.token);
                const fields = ['full_name', 'phone_number', 'address'];
                fields.forEach(field => setValue(field, data.data[field]));
                setData(data.data);
            } catch (error) {
                console.log(error)
            }
        }
        getData();
    }, []);

    const onSubmit = (dataSubmit) => {
        console.log(dataSubmit);
        const user = {
            ...data,
            full_name: dataSubmit.full_name,
            phone_number: dataSubmit.phone_number,
            address: dataSubmit.address,
          }
          console.log(user)
    };

    // const updateUser = async (user) => {
    //     const result = await getCLient(data);
    //     console.log(result);
    // }

    return (
        <UP.Layout>
            <UP.Container>
                <SlidebarOfProfile />
                <UP.Main>
                    <UP.ProfileTop>
                        <UP.ProfileTilte>Hồ sơ của tôi </UP.ProfileTilte>
                        <UP.ProfileDescribe>Quản lý thông tin hồ sơ để bảo mật tài khoản</UP.ProfileDescribe>
                    </UP.ProfileTop>
                    <UP.ProfileBottom>
                        <UP.ProfileBottomLeft>
                            <form onSubmit={handleSubmit(onSubmit)}>
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

                                <UP.ProfileFormRow>
                                    <UP.ProfileFormName>Zipcode:</UP.ProfileFormName>
                                    <p>{data.zipcode}</p>
                                </UP.ProfileFormRow>

                                <UP.ProfileFormRow>
                                    <UP.ProfileFormName></UP.ProfileFormName>
                                    {/* <UP.ProfileButton type="button" value="Lưu" /> */}
                                    <UP.ProfileButton type="submit">Lưu</UP.ProfileButton>
                                </UP.ProfileFormRow>
                            </form>
                        </UP.ProfileBottomLeft>
                        <UP.ProfileBottomRight>
                            <UP.ProfileAvata src={imgUserDefault} alt="" />
                            <label htmlFor="avatar">Chọn ảnh</label>
                            <input type="file" name="avatar" id="avatar" accept="image/*" />
                            <p>Dụng lượng file tối đa 1 MB </p>
                            <p>Định dạng:.JPEG, .PNG</p>
                        </UP.ProfileBottomRight>
                    </UP.ProfileBottom>
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


export default connect(mapStateToProp,)(UserProfile)