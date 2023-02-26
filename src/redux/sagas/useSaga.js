import {call,put} from 'redux-saga/effects'
import * as productServices from '../../axios/userService'
import * as actions from '../actions'


//// products
export const PRODUCT_SAGA_GET=function*(){
    try {
        let listProduct= yield call(productServices.PRODUCT_GET_SERVICE)
        yield put(actions.act_get_success_items(listProduct))
    } catch (error) {
        
    }
}

//// users

export const USER_POST_SAGA=function*(user){
    console.log(user)
    try {
        yield call(productServices.USER_POST_SERVICE,user.payload)
    } catch (error) {
        console.log('vao USER_POST_SAGA Error',error);
        alert("Đăng kí không thành công, Vui lòng kiểm tra lại thông tin !")
    }
}