import axios from "axios";

const apiClientGet = async (endpoint, token) => {
  try {
    const request = axios.get(`${process.env.REACT_APP_API}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const response = await request.data;
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default apiClientGet;
