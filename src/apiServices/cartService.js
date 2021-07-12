import axiosClient from "./axiosClient";
import axios from "axios";
import config from "./requestConfig";

const cartService = {
  getAllProductInCart: async (token) => {
    const data = await axiosClient("/user/cart", token);
    return data;
  },
  removeProductFromCart: async ({ id, token }) => {
    try {
      const request = await axios.put(
        `${process.env.REACT_APP_API}/user/cart/${id}/delete`,
        null,
        config(token),
      );
      const response = await request.data;
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default cartService;
