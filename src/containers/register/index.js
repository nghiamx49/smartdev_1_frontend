import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RegisterContainer, RegisterForm, Logo, RegisterButton } from "./style";
import logo from "../../assests/img/logo.png";

import ProviderRegister from "./provider";
import UserRegister from "./user";
import { userRegisterSchema, providerRegisterSchema } from "./validation";

const Register = () => {
  const [registerAs, setRegisterAs] = useState("User");

  const validationSchema =
    registerAs === "User" ? userRegisterSchema : providerRegisterSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const handleChange = (e) => {
    e.preventDefault();
    if (registerAs === "User") {
      setRegisterAs("Provider");
    } else {
      setRegisterAs("User");
    }
  };

  const onSubmit = (data) => console.log(data);

  return (
    <RegisterContainer>
      <Logo src={logo} />
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Đăng kí</h2>

        <RegisterButton onClick={handleChange}>
          {registerAs === "User"
            ? "Đăng kí trờ thành nhà cung cấp"
            : "Đăng kí trở thành người mua sắm"}
        </RegisterButton>
        <br />
        <br />
        {registerAs === "User" ? (
          <UserRegister register={register} errors={errors} />
        ) : (
          <ProviderRegister register={register} errors={errors} />
        )}
        <p style={{ textAlign: "center" }}>
          Đã có tài khoản? <Link to="/login">Đăng Nhập</Link> ngay!
        </p>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
