import axios from "axios";
import getCLient from "./axiosClient"

const adminService = {
  getAllProvider: async (status ,token ,page) => {
    try{
      const request = await getCLient(`/admin/providers/${status}?page=${page}`, token);
      let response = await request;
      console.log(request);
      return response;
    }catch(e){
      console.log(e);
    }
  },
  getAllUser: async (status , token , page) => {
    try{
      const request = await getCLient(`/admin/users/${status}?page=${page}`, token);
      let response = await request;
      console.log(request)
      return response;
    }catch(e){
      console.log(e);
    }
  },
  getAllProduct: async (status ,token , page) => {
    try{
      const request = await getCLient(`/admin/product_requests/${status}?page=${page}`, token);
      let response = await request;
      console.log(request)
      return response;
    }catch(e){
      console.log(e);
    }
  },

  searchProduct: async (status ,token , searchValue) => {
    try{
      const request = await getCLient(`/admin/product_requests/${status}?keyword=${searchValue}`, token);
      let response = await request;
      console.log(request)
      return response;
    }catch(e){
      console.log(e);
    }
  },
};


export default adminService;
