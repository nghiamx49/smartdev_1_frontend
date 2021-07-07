import { cartContants } from "../constants/";

const initialState = [];

const { GET_ALL_PRODUCTS_IN_CART_SUCCESS, REMOVE_PRODUCT_FROM_CART_SUCCESS } =
  cartContants;

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_IN_CART_SUCCESS:
      return action.payload;
    case REMOVE_PRODUCT_FROM_CART_SUCCESS:
      return state.filter(
        (item) => parseInt(item.id) !== parseInt(action.payload),
      );
    default:
      return state;
  }
};

export default cartReducer;
