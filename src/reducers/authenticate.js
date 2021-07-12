import { authenticateContants } from "../constants/index";
const { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } = authenticateContants;

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
    case LOGOUT:
      return {
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
    case authenticateContants.UPDATEP_AVATAR:
      console.log(action.payload);
      return { ...state, account: {...state.account, avatar_source: action.payload}}
    default:
      return state;
  }
};

export default authenticateReducer;
