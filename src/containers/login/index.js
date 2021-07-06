import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSuccess } from "../../actions/authenticateAction";

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

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authenticateService from "../../apiServices/authenticateService";

const loginSchema = yup.object().shape({
  username: yup.string().required("username không được để trống"),
  password: yup.string().required("password không được để trống"),
});

const Login = ({ loginSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const { login } = authenticateService;

  const [message, setMessage] = useState(null);

  const onSubmit = async (data) => {
    const result = await login(data);
    console.log(result);
    if (result.status === 401) {
      setMessage(result.message);
    } else {
      loginSuccess(result);
    }
  };

  console.log(message);

  return (
    <>
      {message && toast.error(message)}
      <ToastContainer
        // position="top-center"
        // autoClose={false}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss={false}
        // pauseOnHover
        limit={1}
        onClick={() => setMessage(null)}
      />
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
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (data) => dispatch(loginSuccess(data)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
