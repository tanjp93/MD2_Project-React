import *as actionTypes from "../constants/constants";

//product
export const getItems = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_SUCCESS_LIST_PRODUCT:
            return [...action.payload];
        default:
            return state
    }
}
export const getSearchItems = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_SEARCH_SUCCESS:
            return [action.payload];
        default:
            return state
    }
}
export const actGetInfoItems = (state = [], action) => {
    // console.log("action.payload",action.payload);
    switch (action.type) {
        case actionTypes.GET_INFOR_PRODUCT:
            return [action.payload];

        case actionTypes.SET_PRODUCT:
            return state = [];
        default:
            return state
    }
}

//user
export const getLoginUser = (state = [], action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return action.payload;
        default:
            return state
    }
}