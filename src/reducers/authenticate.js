const initialState = {
  account: {
    id: "",
    username: "",
    avatar_source: "",
    email: "",
    phone_number: "",
    role: "",
  },
  token: "",
  isLoggedIn: false,
};

const authenticateReducer = (state = initialState, action) => {};

export default authenticateReducer;
