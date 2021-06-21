import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100%;
  background-color: #ee4d2d;
  position: relative;
  padding: 400px 0;
`;

export const Logo = styled.img`
  position: absolute;
  left: 30%;
  bottom: 40%;
`;

export const RegisterForm = styled.form`
  background-color: #ffffff;
  width: 360px;
  position: absolute;
  border-radius: 5px;
  padding: 15px;
  right: 10%;
  top: 10%;
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  label {
    font-weight: bold;
  }
`;

export const RegisterButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #f3836c;
  color: #ffffff;
  :hover {
    cursor: pointer;
    background-color: #ff522e;
  }
`;
