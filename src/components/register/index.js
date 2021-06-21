import React from "react";

import { RegisterContainer } from "./style";

import ProviderRegister from "./provider";
import UserRegister from "./user";
const Register = () => {
  return (
    <RegisterContainer>
      <UserRegister />
    </RegisterContainer>
  );
};

export default Register;
