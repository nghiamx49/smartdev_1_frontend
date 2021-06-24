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

const authenticateReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authenticateReducer;
