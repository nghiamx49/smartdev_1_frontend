import axios from "axios";
import config from "./requestConfig";

const apiClientGet = async (endpoint, token) => {
  try {
    const request = await axios.get(
      `${process.env.REACT_APP_API}${endpoint}`,
      config(token),
    );
    const response = await request.data;
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default apiClientGet;
