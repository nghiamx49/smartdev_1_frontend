import { authenticateContants } from "../constants";

const initialState = {
  username: "",
  otp: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case authenticateContants.FORGOT_PASSWORD_PROCESS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        otp: action.payload.otp,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

export default userReducer;
