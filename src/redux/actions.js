import { type } from "@testing-library/user-event/dist/type";
import { retry } from "redux-saga/effects";
import * as actionTypes from "./constants/constants";


//products//
export const act_get_items = () => {
    return {
        type: actionTypes.GET_LIST_PRODUCT
    }
}
export const act_get_success_items = (payload) => {
    return {
        type: actionTypes.GET_SUCCESS_LIST_PRODUCT,
        payload
    }
}



//user//
export const act_post_user=user=>{
    return{
        type:actionTypes.POST_USER,
        payload:user
    }
}
export const act_login_user=user=>{
    return{
        type:actionTypes.LOGIN_USER,
        payload:user
    }
}

export const act_search_user=user=>{
    return{
        type:actionTypes.SEARCH_USER,
        payload:user
    }
}
export const act_login_succes=action=>{
    return {
        type:actionTypes.LOGIN_SUCCESS,
        payload:action
    }
}
export const act_login_state=action=>{
    return {
        type:actionTypes.IS_LOGIN,
        payload:action
    }
}