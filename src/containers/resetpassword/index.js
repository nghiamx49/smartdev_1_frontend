import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import bcrypt from 'bcryptjs';
import { useHistory } from "react-router";

import { FPContainer, FPCoverContainer, FPTitle, FPTitleIcon, FPTitleName, FPContent, FPContentName, FPContentInputDiv, FPContentInput, FPContentButton, FPContentBorderButton, Error } from './style'
import { resetPasswordRequest } from '../../actions/userAction'
import { connect } from 'react-redux';
const forgotpasswordSchema = yup.object().shape({
    new_password: yup
        .string()
        .required("mật khẩu mới không được để trống")
        .min(6, "mật khẩu ít nhất 6 kí tự. vui lòng nhập lại"),
});

function ResetPassword({ username, resetpassword }) {
    const history = useHistory();

    let { slug } = useParams();
    console.log(slug);

    if(!bcrypt.compareSync(username, slug)) {
        history.push("/login");
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(forgotpasswordSchema) });

    const onSubmit = (dataSubmit) => {
        resetpassword({ new_password: dataSubmit.new_password, username: username })
    };

    return (
        <FPCoverContainer>
            <FPContainer>
                <FPTitle>
                    <FPTitleIcon>
                        <Link to="/forgotpassword"><BiArrowBack color="#FD5F32" style={{ fontSize: "25px" }} /></Link>
                    </FPTitleIcon>
                    <FPTitleName>
                        Thiếp Lập Mật Khẩu
                    </FPTitleName>
                </FPTitle>
                <FPContent>
                    <FPContentName>
                        Tạo mật khẩu mới
                    </FPContentName>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FPContentInputDiv>
                            <FPContentInput type="password" placeholder="nhập mật khẩu mới" {...register("new_password")} />
                        </FPContentInputDiv>
                        {errors.new_password &&
                            <FPContentInputDiv>
                                <Error>{errors.new_password?.message}</Error>
                            </FPContentInputDiv>
                        }
                        <FPContentBorderButton>
                            <FPContentButton>
                                Tiếp theo
                        </FPContentButton>
                        </FPContentBorderButton>
                    </form>
                </FPContent>

            </FPContainer>
        </FPCoverContainer>

    )
}

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.username,
    };
};

const mapDispatchToProps = {
    resetpassword: resetPasswordRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
