import {all,takeLatest} from 'redux-saga/effects'
import * as actionTypes from '../constants/constants'
import * as act_saga from './useSaga'

export const rootSaga=function*(){
    yield all([
        takeLatest(actionTypes.GET_LIST_PRODUCT,act_saga.PRODUCT_SAGA_GET)
    ])
}