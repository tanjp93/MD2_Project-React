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
export const act_search_items = (payload) => {
    return {
        type: actionTypes.GET_SEARCH_PRODUCT,
        payload
    }
}
export const act_getInfo_items = (payload) => {
    return {
        type: actionTypes.GET_INFOR_PRODUCT,
        payload
    }
}

export const act_set_items = (payload) => {
    return {
        type: actionTypes.SET_PRODUCT,
        payload
    }
}

export const act_search_success_items = (payload) => {
    return {
        type: actionTypes.GET_SEARCH_SUCCESS,
        payload
    }
}







//user//
export const act_get_list_user=()=>{
    return{
        type:actionTypes.GET_LIST_USERS,
    }
}




export const act_get_list_users_success=(payload)=>{
   
    return{
        type:actionTypes.GET_LIST_SUCCESS_USER,
        payload
    }
}

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


//user Edit//

export const act_edit_user=user=>{
  
    return{
        type:actionTypes.PRE_EDIT_USER,
        payload:user
    }
}







export const act_update_user=user=>{
    // console.log(user);
    return{
        type:actionTypes.UPDATE_USER,
        payload:user
    }
}


export const act_status_user=user=>{
    return{
        type:actionTypes.ACTIVE_USER,
        payload:user
    }
}




export const act_delete_user=user=>{

    return{
        type:actionTypes.DELETE_USER,
        payload:user.id
    }
}


export const act_search_user=payload=>{
    return{
        type:actionTypes.SEARCH_USER,
        payload
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
export const act_logout_state=()=>{
    return {
        type:actionTypes.IS_LOGOUT,
    }
}





/// current Unit///
export const act_current_unit_state=(unit)=>{
    // console.log(unit);
    switch (unit){
        case 'jpn' :
         return{
             type:actionTypes.JPN,
             payload:unit
         }        
          case 'vnd' :
         return{
             type:actionTypes.VND,
             payload:unit
         }       
           case 'usd' :
         return{
             type:actionTypes.USD,
             payload:unit
         }   

    }

}

//// current pepleNumber
export const act_get_number_pp=(numPeople)=>{
    // console.log(numPeople);
    return {
        type:actionTypes.NUMBER_PP,
        payload:numPeople
    }
}