import React from "react";
import PropTypes from "prop-types";

import { RegisterButton } from "./style";

const UserRegister = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="fullname">Họ tên:</label>
      <input type="text" {...register("fullname")} placeholder="Họ và tên" />
      <span>{errors.fullname?.message}</span>
      <br />
      <label htmlFor="username">Tên đăng nhập:</label>
      <input
        type="text"
        {...register("username")}
        placeholder="Tên đăng nhập"
      />
      <span>{errors.username?.message}</span>
      <br />
      <label htmlFor="password">Mật khẩu:</label>
      <input type="password" {...register("password")} placeholder="Mật khẩu" />
      <span>{errors.password?.message}</span>
      <br />
      <label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
      <input
        type="password"
        {...register("confirmPassword")}
        placeholder="Xác nhận mật khẩu"
      />
      <span>{errors.confirmPassword?.message}</span>
      <br />
      <label htmlFor="address">Địa chỉ:</label>
      <input type="text" {...register("address")} placeholder="Địa chỉ" />
      <span>{errors.address?.message}</span>
      <br />
      <label htmlFor="phone_number">Số điện thoại:</label>
      <input
        type="text"
        {...register("phone_number")}
        placeholder="Số điện thoại"
      />
      <span>{errors.phone_number?.message}</span>
      <br />
      <label htmlFor="email">Email:</label>
      <input type="text" {...register("email")} placeholder="email" />
      <span>{errors.email?.message}</span>
      <br />
      <label htmlFor="zipcode">Zipcode:</label>
      <input type="text" {...register("zipcode")} placeholder="zipcode" />
      <span>{errors.zipcode?.message}</span>
      <br />
      <RegisterButton>Đăng kí</RegisterButton>
    </>
  );
};

UserRegister.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};

export default UserRegister;
