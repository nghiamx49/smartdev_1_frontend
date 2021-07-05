import React from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { submitLogin } from "../../actions/authenticateAction";

import { FaFacebook, FaGoogle } from "react-icons/fa";
import {
  LoginContainer,
  Logo,
  LoginForm,
  LoginButton,
  SocialButtonContainer,
  SocialButton,
} from "./style";
import logo from "../../assests/img/logo.png";
import { connect } from "react-redux";

const loginSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("password is requrired"),
});

const Login = ({ login }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data) => login(data);

  return (
    <LoginContainer>
      <Logo src={logo} />
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <h2 style={{ fontWeight: 400 }}>Đăng nhập</h2>
        <input
          type="text"
          {...register("username")}
          placeholder="tên đăng nhập"
        />
        <span>{errors.username?.message}</span>
        <input
          type="password"
          {...register("password")}
          placeholder="mật khẩu"
        />
        <span>{errors.passsword?.message}</span>
        <LoginButton>Đăng nhập</LoginButton>
        <a href="#forgotpassword">Quên Mật Khẩu</a>
        <hr />
        <SocialButtonContainer>
          <SocialButton>
            <FaFacebook /> Facebook
          </SocialButton>
          <SocialButton>
            <FaGoogle /> Gmail
          </SocialButton>
        </SocialButtonContainer>
        <p style={{ textAlign: "center" }}>
          Chưa có tài khoản? <Link to="/register">Đăng ký</Link> ngay!
        </p>
      </LoginForm>
    </LoginContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(submitLogin(data)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
