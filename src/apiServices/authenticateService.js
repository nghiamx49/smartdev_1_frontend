import axios from "axios";

const config = {
  validateStatus: function (status) {
    return status <= 500;
  },
};

const authenticateService = {
  login: async ({ username, password }) => {
    let request = await axios.post(
      `${process.env.REACT_APP_API}/authenticate/login`,
      {
        username,
        password,
      },
      config,
    );
    let response = await request.data;
    return response;
  },
  getUserDetail: async () => {},
  logout: async () => {},
  forgotPassword: async () => {},
  registerAsUser: async () => {},
  registerAsProvider: async () => {},
};

export default authenticateService;
