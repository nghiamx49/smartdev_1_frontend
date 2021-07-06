import { authenticateContants } from "../constants/index";

const { LOGIN, LOGIN_SUCCESS, LOGOUT } = authenticateContants;

export const submitLogin = (loginForm) => {
  return { type: LOGIN, payload: loginForm };
};

export const loginSuccess = (data) => {
  return { type: LOGIN_SUCCESS, payload: data };
};

export const submitLogout = () => {
  return { type: LOGOUT };
};
