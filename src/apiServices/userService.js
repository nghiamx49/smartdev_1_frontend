import apiClient from "./axiosClient";
import axios from "axios";

const { apiClientGet } = apiClient;

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
  getOrderHistory: async (token) => {
    const response = await apiClientGet(`/user/order_history`, token);
    return response;
  },
  getOrderDetail: async (id, token) => {
    const response = await apiClientGet(`/user/order_history/${id}`, token);
    return response;
  },
};

export default userService;
