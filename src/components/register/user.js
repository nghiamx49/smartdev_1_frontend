import React from "react";

import { RegisterButton, RegisterForm } from "./style";

const UserRegister = () => {
  return (
    <RegisterForm>
      <h2>Đăng kí</h2>
      <label htmlFor="owner">Họ tên:</label>
      <input type="text" name="owner" placeholder="Họ và tên" />
      <label htmlFor="username">Tên đăng nhập:</label>
      <input type="text" name="username" placeholder="Tên đăng nhập" />
      <label htmlFor="password">Mật khẩu:</label>
      <input type="password" name="password" placeholder="Mật khẩu" />
      <label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
      <input
        type="password"
        name="confirmPassword"
        placeholder="Xác nhận mật khẩu"
      />
      <label htmlFor="address">Địa chỉ:</label>
      <input type="text" name="address" placeholder="Địa chỉ" />
      <label htmlFor="phone_number">Số điện thoại:</label>
      <input type="text" name="phone_number" placeholder="Số điện thoại" />
      <label htmlFor="email">Email:</label>
      <input type="text" name="email" placeholder="email" />
      <label htmlFor="zipcode">Zipcode:</label>
      <input type="text" name="zipcode" placeholder="zipcode" />
      <RegisterButton>Đăng kí</RegisterButton>
    </RegisterForm>
  );
};

export default UserRegister;
