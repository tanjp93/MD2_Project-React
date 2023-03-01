import { combineReducers } from "redux";
import { getItems,getSearchItems ,actGetInfoItems,actSetItems} from "./getItem";

import {userReducer} from "./user"
// import { getLoginUser} from "./user"
import {UnitReducer} from "./Unit.js"


export const rootReducer=combineReducers
// ({getItems,getLoginUser, userReducer,UnitReducer,getSearchItems,actGetInfoItems})
({getItems, userReducer,UnitReducer,getSearchItems,actGetInfoItems})