import React from "react";

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

const Login = () => {
  return (
    <LoginContainer>
      <Logo src={logo} />
      <LoginForm>
        <h2 style={{ fontWeight: 400 }}>Đăng nhập</h2>
        <input type="text" name="username" placeholder="tên đăng nhập" />
        <input type="password" name="password" placeholder="mật khẩu" />
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
          Chưa có tài khoản? <a href="#dangki">Đăng ký</a> ngay!
        </p>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
