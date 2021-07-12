import { authenticateContants } from '../constants'

const initialState = {
  username: "",
  otp : "",
  checkResult : false,
  
};

const userReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case authenticateContants.FORGOT_PASSWORD_PROCESS_SUCCESS:
      console.log(action.payload);
      return { ...state, otp: action.payload.otp, username:action.payload.username, checkResult:true}
    default:
      return state;
  }
};

export default userReducer;
