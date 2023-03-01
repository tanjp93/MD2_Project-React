import { LOGIN_SUCCESS, IS_LOGOUT,GET_LIST_SUCCESS_USER } from "../constants/constants";

const initialState = '';

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("reducer", action);
      return  action.payload
      // return { email: action.payload.user.email, accessToken: action.payload.accessToken, permission:action.payload.permission }
    case IS_LOGOUT:
      // console.log("reducer", action);
      return initialState
      case GET_LIST_SUCCESS_USER:
        return action.payload
    default:
      return state;
  }
}