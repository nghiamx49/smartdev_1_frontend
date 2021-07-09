import apiClient from "./axiosClient";

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
};

export default userService;
