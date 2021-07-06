import axios from "axios";

const adminService = {
  getAllProvider: async (status) => {
    const token = {
      token : localStorage.getItem("token")
    }
    try{
      let request = await axios.get(`${process.env.REACT_APP_API}/admin/providers/${status}`,token);
      let response = await request.data;
      return response.data;
    }catch(e){
      console.log(e);
    }
  },
  getAllUser: async (status) => {
    // const token = {
    //   token : localStorage.getItem("token")
    // }
    try{
      let request = await axios.get(`${process.env.REACT_APP_API}/admin/users/${status}`,  localStorage.getItem("token"));
      let response = await request.data;
      console.log(response)
      return response.data;
    }catch(e){
      console.log(e);
    }
  },
};


export default adminService;
