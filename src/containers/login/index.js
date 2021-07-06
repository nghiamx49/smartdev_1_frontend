import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSuccess } from "../../actions/authenticateAction";

import { LoginContainer, Logo, LoginForm, LoginButton } from "./style";
import logo from "../../assests/img/logo.png";
import { connect } from "react-redux";

import { toast } from "react-toastify";
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

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setSubmitting(true);
    const result = await login(data);
    setSubmitting(false);
    if (result.status === 200) {
      loginSuccess(result);
      return toast.success(result.message);
    }
    return toast.error(result.message);
  };

  return (
    <>
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
          <span>{errors.password?.message}</span>
          <LoginButton disabled={submitting}>
            {submitting ? "Loading..." : "Đăng nhập"}
          </LoginButton>
          <a href="#forgotpassword">Quên Mật Khẩu</a>
          <hr />
          <p style={{ textAlign: "center" }}>
            Chưa có tài khoản? <Link to="/register/user">Đăng ký</Link> ngay!
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
