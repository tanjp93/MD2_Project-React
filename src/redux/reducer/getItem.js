import *as actionTypes from "../constants/constants";


export const getItems = (state = [], action) => {
    switch (action.type) {
        case  actionTypes.GET_SUCCESS_LIST_PRODUCT:
            return [...action.payload];
        default:
            return state
    }
}



//user

export const searchUser=(state = [], action) =>{
    console.log(action.payload);
    switch (action.type){
        case  actionTypes.SEARCH_USER:
            console.log(action.payload);
            return [...action.payload];
        default:
            return state
    }
}