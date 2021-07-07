import {adminContants} from '../constants/index'

const initialState = {
  allProviders: [],
  allUsers: [],
  allProducts:[],
  pagesProvider : 1 ,
  pagesUsers : 1 ,
  pagesProducts : 1 ,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminContants.GET_ALL_USERS_SUCCESS:
      return {...state , allUsers : action.payload.data , pagesUsers  : action.payload.pages};

    case adminContants.GET_ALL_PROVIDERS_SUCCESS:
      console.log(action.payload.pages)
      return {...state , allProviders : action.payload.data , pagesProvider : action.payload.pages};

    case adminContants.GET_ALL_PROVIDERS_SUCCESS_PENDING:
      return {...state , allProviders : action.payload.data , pagesProvider : action.payload.pages};

    case adminContants.GET_ALL_PRODUCTS_SUCCESS:
      return {...state , allProducts : action.payload.data , allProducts:  action.payload.pages};

    case adminContants.GET_ALL_PRODUCTS_SUCCESS_PENDING:
      return {...state , allProducts : action.payload.data , allProducts:  action.payload.pages};

  default:
    console.log(state)
      return {...state};// tại sao khi return về state thì chỉ có allUser
  }
};

export default adminReducer;
