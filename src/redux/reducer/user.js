import { LOGIN_SUCCESS } from "../constants/constants";

const initialState = {email: "", accessToken: ""};

export const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN_SUCCESS:
        // console.log("reducer", action);
        return {email: action.payload.user.email, accessToken:action.payload.accessToken}
        
  
    default:
        return state;
  }
}