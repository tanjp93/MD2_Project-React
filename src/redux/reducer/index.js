import { combineReducers } from "redux";
import { getItems,getLoginUser } from "./getItem";
import {userReducer} from "./user"
import {UnitReducer} from "./Unit.js"


export const rootReducer=combineReducers({getItems,getLoginUser, userReducer,UnitReducer})