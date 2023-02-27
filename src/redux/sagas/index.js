import {all,takeLatest} from 'redux-saga/effects'
import * as actionTypes from '../constants/constants'
import * as act_saga from './useSaga'

export const rootSaga=function*(){
    yield all([
        //// products
        takeLatest(actionTypes.GET_LIST_PRODUCT,act_saga.PRODUCT_SAGA_GET),
        //// users
        takeLatest(actionTypes.POST_USER,act_saga.USER_POST_SAGA),
        takeLatest(actionTypes.LOGIN_USER,act_saga.USER_LOGIN_SAGA),
        takeLatest(actionTypes.SEARCH_USER,act_saga.USER_SEARCH_SAGA),
    ])
}