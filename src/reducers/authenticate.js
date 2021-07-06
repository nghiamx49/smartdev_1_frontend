import { authenticateContants } from "../constants/index";
const { LOGIN_SUCCESS, LOGIN_FAILED } = authenticateContants;

const initialState = {
  account: {
    address: "",
    avatar_source: "",
    email: "",
    phone_number: "",
    role: "",
    username: "",
  },
  token: "",
  isLoggedIn: false,
  message: "",
  status: null,
};

const authenticateReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { payload } = action;
      return { ...state, ...payload };
    case LOGIN_FAILED:
      const { error } = action;
      return { ...state, ...error };
    default:
      return state;
  }
};

export default authenticateReducer;
