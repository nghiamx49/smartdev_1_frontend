import axios from "axios";
import apiClient from "./axiosClient";
import config from "./requestConfig";

const { apiClientGet } = apiClient;

const userService = {
  getOrderHistory: async (token) => {
    const response = await apiClientGet(`/user/order_history`, token);
    return response;
  },
  getOrderDetail: async (id, token) => {
    const response = await apiClientGet(`/user/order_history/${id}`, token);
    return response;
  },
  doCheckout: async (data, token) => {
    try {
      const request = await axios.put(
        `${process.env.REACT_APP_API}/user/cart/checkout`,
        JSON.stringify({
          ...data,
        }),
        config(token),
      );
      const response = await request.data;
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default userService;
