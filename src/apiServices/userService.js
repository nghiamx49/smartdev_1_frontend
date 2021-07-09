import axios from "axios";
import apiClient from "./axiosClient";

const { apiClientGet } = apiClient;

const userService = {
  getOrderHistory: async (endpoint, token) => {
    const response = await apiClientGet(endpoint, token);
    return response;
  },
};

export default userService;
