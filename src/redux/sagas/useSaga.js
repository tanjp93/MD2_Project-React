import { useDispatch } from 'react-redux'
import { call, put } from 'redux-saga/effects'
import * as productServices from '../../axios/userService'
import * as actions from '../actions'
import { SEARCH_USER } from '../constants/constants'


//// products
export const PRODUCT_SAGA_GET = function* () {
    try {
        let listProduct = yield call(productServices.PRODUCT_GET_SERVICE)
        yield put(actions.act_get_success_items(listProduct))
    } catch (error) {

    }
}

//// users

export const USER_POST_SAGA = function* (user) {
    try {
        yield call(productServices.USER_POST_SERVICE, user.payload)
    } catch (error) {
        console.log('vao USER_POST_SAGA Error', error);
        alert("Đăng kí không thành công, Vui lòng kiểm tra lại thông tin !")
    }
}

export const USER_LOGIN_SAGA = function* (user) {
    // console.log(user);
    try {

      let userInfo =  yield call(productServices.USER_LOGIN_SERVICE, user.payload)
      console.log("saga",userInfo);
        // let userLogin = yield put(actions.act_search_user(user.payload))

        yield put(actions.act_login_succes(userInfo))

    } catch (error) {
        console.log('USER_LOGIN_SAGA =>', error);
    }
}


export const USER_LOGIN_SUCEES_SAGA = function* (user) {
    console.log(user);
    try {
        yield call(productServices.USER_LOGIN_SUCCESS_SERVICE, user.payload)
        yield put(actions.act_login_state(user.payload))
    } catch (error) {
        console.log('USER_LOGIN_SUCEES_SAGA =>', error);
    }
}
export const USER_LOGIN_STATE_SAGA=function*(user){
    console.log(user);
    try {
        yield call (productServices.USER_LOGIN_STATE_SERVICE,user)
    } catch (error) {
        
    }
}



export const USER_SEARCH_SAGA = function* (user) {
    try {
        yield call(productServices.USER_SEARCH_SERVICE, user.payload)
        // yield put(productServices.USER_LOGIN_SUCCESS,user.payload)
    } catch (error) {
        console.log("USER_SEARCH_SAGA=>>", error);
    }
}