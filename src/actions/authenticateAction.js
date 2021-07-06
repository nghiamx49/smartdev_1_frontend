import { authenticateContants } from "../constants/index";

const { LOGIN, LOGIN_SUCCESS } = authenticateContants;

export const submitLogin = (loginForm) => {
  return { type: LOGIN, payload: loginForm };
};

export const loginSuccess = (data) => {
  return { type: LOGIN_SUCCESS, payload: data };
};
