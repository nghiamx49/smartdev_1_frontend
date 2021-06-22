import { useState } from "react";

import { RegisterContainer, RegisterForm, Logo, RegisterButton } from "./style";
import logo from "../../assests/img/logo.png";

import ProviderRegister from "./provider";
import UserRegister from "./user";
const Register = () => {
  const [registerAs, setRegisterAs] = useState("User");

  const handleChange = (e) => {
    e.preventDefault();
    if (registerAs === "User") {
      setRegisterAs("Provider");
    } else {
      setRegisterAs("User");
    }
  };

  return (
    <RegisterContainer>
      <Logo src={logo} />
      <RegisterForm>
        <h2>Đăng kí</h2>

        <RegisterButton onClick={handleChange}>
          {registerAs === "User"
            ? "Đăng kí trờ thành nhà cung cấp"
            : "Đăng kí trở thành người mua sắm"}
        </RegisterButton>
        <br />
        <br />
        {registerAs === "User" ? <UserRegister /> : <ProviderRegister />}
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
