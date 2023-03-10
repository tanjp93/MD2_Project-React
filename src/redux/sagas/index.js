import {all,takeLatest} from 'redux-saga/effects'
import * as actionTypes from '../constants/constants'
import * as act_saga from './useSaga'

export const rootSaga=function*(){
    yield all([
        //// products
        takeLatest(actionTypes.GET_LIST_PRODUCT,act_saga.PRODUCT_SAGA_GET),
        takeLatest(actionTypes.GET_SEARCH_PRODUCT,act_saga.PRODUCT_SAGA_SEARCH),
        takeLatest(actionTypes.GET_DELETE_ITEM,act_saga.PRODUCT_SAGA_DELETE),
        takeLatest(actionTypes.GET_UPDATE_ITEM,act_saga.PRODUCT_SAGA_UPDATE),

        takeLatest(actionTypes.GET_CREATE_ITEM,act_saga.PRODUCT_SAGA_CREATE),



    
        //// users
        takeLatest(actionTypes.POST_USER,act_saga.USER_POST_SAGA),
        takeLatest(actionTypes.LOGIN_USER,act_saga.USER_LOGIN_SAGA),
        takeLatest(actionTypes.GET_LIST_USERS,act_saga.GET_LIST_USER_SAGA),

        takeLatest(actionTypes.UPDATE_USER,act_saga.GET_UPDATE_USER_SAGA),
        takeLatest(actionTypes.SEARCH_USER,act_saga.USER_SEARCH_SAGA),
        takeLatest(actionTypes.DELETE_USER,act_saga.GET_DELETE_USER_SAGA),
        takeLatest(actionTypes.ACTIVE_USER,act_saga.GET_ACTIVE_USER_SAGA)

    ])
}