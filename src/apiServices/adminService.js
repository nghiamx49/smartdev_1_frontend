import axios from "axios";
import getCLient from "./axiosClient"

const adminService = {
  getAllProvider: async (status ,token) => {
    try{
      const request = await getCLient(`/admin/providers/${status}`, token);
      let response = await request;
      console.log(request);
      return response;
    }catch(e){
      console.log(e);
    }
  },
  getAllUser: async (status , token) => {
    try{
      const request = await getCLient(`/admin/users/${status}`, token);
      let response = await request;
      console.log(request)
      return response;
    }catch(e){
      console.log(e);
    }
  },
  getAllProduct: async (status ,token) => {
    try{
      const request = await getCLient(`/admin/product_requests/${status}`, token);
      let response = await request;
      console.log(request)
      return response;
    }catch(e){
      console.log(e);
    }
  },
};


export default adminService;
