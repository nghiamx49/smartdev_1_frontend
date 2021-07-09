import { providerContants } from "../constants";

const initialState = {
  listProducts:[],
  
};

const providerReducer = (state = initialState, action) => {
  switch (action.type) {
    case providerContants.GET_ALL_OWN_PRODUCT_SUCCESS:
      const newlist = [...action.payload]
      return {
        ...state,listProducts:newlist
      }
    case providerContants.GET_ALL_OWN_PRODUCT_PENDING_SUCCESS:
        const newlistpending = [...action.payload]
        return {
          ...state,listProducts:newlistpending
        }
    default:
      return state;
  }
};

export default providerReducer;
