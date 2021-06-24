import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  background-color: #ee4d2d;
  position: relative;
  padding: 300px 0;
`;

export const Logo = styled.img`
  position: absolute;
  left: 30%;
  bottom: 40%;
`;

export const LoginForm = styled.form`
  background-color: #ffffff;
  width: 360px;
  position: absolute;
  border-radius: 5px;
  padding: 15px;
  right: 10%;
  bottom: 20%;
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`;

export const LoginButton = styled.button`
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

export const SocialButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const SocialButton = styled.button`
  width: 150px;
  color: #ffffff;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  background-color: #5693f9;
  box-sizing: border-box;
  :hover {
    cursor: pointer;
    background-color: #136bfd;
  }
`;
