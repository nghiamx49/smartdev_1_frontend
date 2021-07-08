import { productContants } from "../constants";

const initialState = {
  allProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productContants.GET_ALL_PRODUCTS_SUCCESS:
      return {...state,allProducts:action.payload}
    default:
      return state;
  }
};

export default productReducer;
