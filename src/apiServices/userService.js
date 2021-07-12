import axios from "axios";

const userService = {

  changePassword: async (email) => {
    let result = await axios.post(
      `${process.env.REACT_APP_API}/authenticate/verify_mail`,
      {
        email: email
      },
      {
        validateStatus: (status) => {
          return status < 500;
        }
      }
    )

    return result;
  },
  resetPassword: async (data) => {
    let result = await axios.put(
      `${process.env.REACT_APP_API}/authenticate/reset_password`,
      data,
      {
        validateStatus: (status) => {
          return status < 500;
        }
      }
    )
    return result;
  },
};

export default userService;
