import { GET_SUCCESS_LIST_PRODUCT } from "../constants/constants";


export const getItems = (state = [], action) => {
    switch (action.type) {
        case  GET_SUCCESS_LIST_PRODUCT:
            return [...action.payload];
        default:
            return state
    }
}