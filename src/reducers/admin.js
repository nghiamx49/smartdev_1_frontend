import {adminContants} from '../constants/index'

const initialState = {
  allProviders: [],
  allUsers: [],
  allProducts:[],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminContants.GET_ALL_USERS_SUCCESS:
      console.log(state)
      return {...state , allUsers : action.payload};

    case adminContants.GET_ALL_PROVIDERS_SUCCESS:
      console.log(state)
      return {...state , allProviders : action.payload};

    case adminContants.GET_ALL_PROVIDERS_SUCCESS_PENDING:
      console.log(state)
      return {...state , allProviders : action.payload};

    case adminContants.GET_ALL_PRODUCTS_SUCCESS:
      console.log(state)
      return {...state , allProducts : action.payload};
    case adminContants.GET_ALL_PRODUCTS_SUCCESS_PENDING:
      console.log(state)
      return {...state , allProducts : action.payload};

  default:
    console.log(state)
      return {...state};// tại sao khi return về state thì chỉ có allUser
  }
};

export default adminReducer;
