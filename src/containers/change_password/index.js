import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import apiClient from '../../apiServices/axiosClient'
import SlidebarOfProfile from '../../components/slidebarOfProfile'
import * as UP from './style'

const passwordSchema = yup.object().shape({
    old_password: yup
        .string()
        .required("username is required"),
    new_password: yup
        .string()
        .required("phone is requrired")
        .min(6, 'Password must be at least 6 characters'),
    confirm_password: yup
        .string()
        .required("address is requrired")
        .oneOf([yup.ref('new_password'), null], 'Passwords does not match'),
});

const ChangePass = (props) => {

    const { apiClientPost } = apiClient;

    const { register, handleSubmit, triggerValidation, formState: { errors } } = useForm({
        resolver: yupResolver(passwordSchema)
    });

    const onSubmit = (dataSubmit) => {
        console.log(dataSubmit);
        changePassword({dataSubmit});
    };

    const changePassword = async (data) => {
        const pass = {old_password: data.old_password, new_password:data.new_password}
        const result = await apiClientPost('/user/change_password', pass, props.token);
        console.log(result);
    }

    return (
        <UP.Layout>
            <UP.Container>
                <SlidebarOfProfile />
                <UP.Main>
                    <UP.ProfileTop>
                        <UP.ProfileTilte>Đổi Mật Khẩu </UP.ProfileTilte>
                        <UP.ProfileDescribe>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</UP.ProfileDescribe>
                    </UP.ProfileTop>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <UP.ProfileBottom>

                            <UP.ProfileBottomLeft>

                                <UP.ProfileFormRow>
                                    <UP.ProfileFormName>Mật khẩu hiện tại:</UP.ProfileFormName>
                                    <UP.ProfileInput type="text" {...register("old_password")} />
                                </UP.ProfileFormRow>
                                {errors.old_password &&
                                    <UP.ProfileFormRow>
                                        <UP.ProfileFormName></UP.ProfileFormName>
                                        <UP.Error>{errors.old_password?.message}</UP.Error>
                                    </UP.ProfileFormRow>
                                }

                                <UP.ProfileFormRow>
                                    <UP.ProfileFormName>Mật khẩu mới:</UP.ProfileFormName>
                                    <UP.ProfileInput type="text" {...register("new_password")} />
                                </UP.ProfileFormRow>
                                {errors.new_password &&
                                    <UP.ProfileFormRow>
                                        <UP.ProfileFormName></UP.ProfileFormName>
                                        <UP.Error>{errors.new_password?.message}</UP.Error>
                                    </UP.ProfileFormRow>
                                }

                                <UP.ProfileFormRow>
                                    <UP.ProfileFormName>Xác nhận mật khẩu:</UP.ProfileFormName>
                                    <UP.ProfileInput type="text" {...register("confirm_password")} />
                                </UP.ProfileFormRow>
                                {errors.confirm_password &&
                                    <UP.ProfileFormRow>
                                        <UP.ProfileFormName></UP.ProfileFormName>
                                        <UP.Error>{errors.confirm_password?.message}</UP.Error>
                                    </UP.ProfileFormRow>
                                }

                                <UP.ProfileFormRow>
                                    <UP.ProfileFormName></UP.ProfileFormName>
                                    <UP.ProfileButton type="submit">Xác nhận</UP.ProfileButton>
                                </UP.ProfileFormRow>
                            </UP.ProfileBottomLeft>
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


export default connect(mapStateToProp,)(ChangePass)