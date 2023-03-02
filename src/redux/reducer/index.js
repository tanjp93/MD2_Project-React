import { combineReducers } from "redux";
import { getItems,getSearchItems ,actGetInfoItems,actGetNumberPP} from "./getItem";

import {userLogin,listUser,preEditUser} from "./user"
// import { getLoginUser} from "./user"
import {UnitReducer} from "./Unit.js"


export const rootReducer=combineReducers
// ({getItems,getLoginUser, userReducer,UnitReducer,getSearchItems,actGetInfoItems})
({getItems, userLogin,listUser,UnitReducer,getSearchItems,actGetInfoItems,preEditUser,actGetNumberPP})