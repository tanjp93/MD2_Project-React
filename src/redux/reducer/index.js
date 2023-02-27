import { combineReducers } from "redux";
import { getItems,getLoginUser } from "./getItem";


export const rootReducer=combineReducers({getItems,getLoginUser})