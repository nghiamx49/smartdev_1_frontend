import axios from "axios";

const productService = {
  getAllProduct: () => {
    return axios.request({
      method: "get",
      url: `${process.env.REACT_APP_API}/products`
  });
  },
  getAllByCategory: async () => {},
  getProductDetail: (id) => {
    return axios.request({
      method: "get",
      url: `${process.env.REACT_APP_API}/products/${id}`
  })
  },
  addProductToCart: async () => {},
};

export default productService;
