import { LOGIN_SUCCESS, IS_LOGOUT, GET_LIST_SUCCESS_USER, PRE_EDIT_USER } from "../constants/constants";

const initialState = '';
export const userLogin = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    case IS_LOGOUT:
      return '';

    default:
      return state;
  }

}



export const listUser = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_SUCCESS_USER:

      return action.payload
    default:
      return state;
  }
}

export const preEditUser = (state = '', action) => {

  switch (action.type) {
    case PRE_EDIT_USER:
  
      return action.payload
    default:
      return state;
  }
}