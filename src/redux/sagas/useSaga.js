import {call,put} from 'redux-saga/effects'
import * as productServices from '../../axios/userService'
import * as actions from '../actions'

export const PRODUCT_SAGA_GET=function*(){
    try {
        let listProduct= yield call(productServices.PRODUCT_GET_SERVICE)
        yield put(actions.act_get_success_items(listProduct))
    } catch (error) {
        
    }
}