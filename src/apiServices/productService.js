import axios from "axios";

const productService = {
  getAllProduct: () => {
    return axios.request({
      method: "get",
      url: `${process.env.REACT_APP_API}/products`
  });
  },
  getAllByCategory: async () => {},
  getProductDetail: async () => {},
  addProductToCart: async () => {},
};

export default productService;
