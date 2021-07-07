import axios from "axios";

export const apiClientPatch = async (endpoint, token , id , status) => {
  try {
    const request =  await axios.patch(`${process.env.REACT_APP_API}/admin/providers/update_status`,
      {
        id , status,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        validateStatus: function (status) {
          return status < 500;
        },
      },).then((response) => console.log(response));
    const response = await request.data;
    return response;
  } catch (error) {
    console.log(error);
  }
};

