import { authenticateContants } from "../constants/index";
const { LOGIN_SUCCESS } = authenticateContants;

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
  message: [],
};

const authenticateReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { payload } = action;
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default authenticateReducer;
