import axios from "axios";

const authenticateService = {
  login: async ({ username, password }) => {
    try {
      console.log(`${process.env.REACT_APP_API}/authenticate/login`);
      let request = await axios.post(
        `${process.env.REACT_APP_API}/authenticate/login`,
        {
          username,
          password,
        },
      );
      let response = request.data;
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  getUserDetail: async () => {},
  logout: async () => {},
  forgotPassword: async () => {},
  registerAsUser: async () => {},
  registerAsProvider: async () => {},
};

export default authenticateService;
