import { LOGIN_SUCCESS ,IS_LOGOUT} from "../constants/constants";

const initialState = {email: "", accessToken: ""};

export const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN_SUCCESS:
        // console.log("reducer", action);
        return {email: action.payload.user.email, accessToken:action.payload.accessToken}
        case IS_LOGOUT:
        // console.log("reducer", action);
        return {email: "", accessToken: ""}
    default:
        return state;
  }
}