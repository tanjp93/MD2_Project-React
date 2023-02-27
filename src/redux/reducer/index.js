import { combineReducers } from "redux";
import { getItems,getLoginUser } from "./getItem";
import {userReducer} from "./user"


export const rootReducer=combineReducers({getItems,getLoginUser, userReducer})