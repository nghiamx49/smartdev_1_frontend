import axios from "axios";

const productService = {
  getAllProduct: (page) => {
    return axios.request({
      method: "get",
      url: `${process.env.REACT_APP_API}/products?page=${page}`
  });

  },
  getAllByCategory: async () => {},
  getProductDetail: (id) => {
    return axios.get(`${process.env.REACT_APP_API}/products/${id}`, {
      validateStatus: (status) => {
        return status <= 500;
      },
    });
  },
};

export default productService;
