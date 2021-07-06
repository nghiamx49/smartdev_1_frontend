import {adminContants} from '../constants/index'
const initialState = {
  allProviders: [],
  allUsers: [],
  allProducts:"jefnjkv",
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminContants.GET_ALL_USERS_SUCCESS:
      // return {...state , allUsers : action.payload};
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default adminReducer;
