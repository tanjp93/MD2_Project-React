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

export const PRODUCT_SAGA_DELETE = function* (action) {
    // console.log(action.payload);
    try {
        yield call(productServices.PRODUCT_DELETE_SERVICE(action.payload))
        yield put(actions.act_get_items())
    } catch (error) {
    }
}
export const PRODUCT_SAGA_CREATE = function* (action) {
    console.log(action.payload);
    try {
        yield call(productServices.PRODUCT_POST_SERVICE(action.payload))
        yield put(actions.act_get_items())
    } catch (error) {
        console.log('ERROR PRODUCT_SAGA_CREATE', error);
    }
}



export const PRODUCT_SAGA_SEARCH = function* (action) {
    // console.log(action);
    try {
        let listProduct = yield call(productServices.PRODUCT_SEARCH_PRODUCT_SERVICE, action.payload)


        yield put(actions.act_search_success_items(listProduct))
    } catch (error) {
    }
}


export const PRODUCT_SAGA_UPDATE=function*(action){
    // console.log(action);
    try {
        yield call(productServices. PRODUCT_PATCH_SERVICE , action.payload)
        yield put(actions.act_get_items())
        yield alert("Cập nhật Thành Công")
    } catch (error) {
        console.log("PRODUCT_SAGA_UPDATE >>>>" ,PRODUCT_SAGA_UPDATE );
    }
}

//// users

export const USER_POST_SAGA = function* (user) {
    try {
        yield call(productServices.USER_POST_SERVICE, user.payload)
        alert(`Chúc mừng bạn đã đăng kí thành công với tài khoản ${user.payload.email} !`)
    } catch (error) {
        console.log('vao USER_POST_SAGA Error', error);
        alert("Đăng kí không thành công, Vui lòng kiểm tra lại thông tin !")
    }
}

export const USER_LOGIN_SAGA = function* (user) {

    try {
        let userInfo = yield call(productServices.USER_LOGIN_SERVICE, user.payload)
        console.log(userInfo);
        yield put(actions.act_login_succes(userInfo))

    } catch (error) {
        alert("Vui lòng kiểm tra lại Email hoặc mật khẩu!!! USER_LOGIN_SAGA")
    }
}


export const USER_SEARCH_SAGA = function* (user) {
    console.log(user.payload);
    try {
        yield call(productServices.USER_SEARCH_SERVICE, user.payload)
        // yield put(actions.)
    } catch (error) {
        alert("Vui lòng kiểm tra lại Email hoặc mật khẩu!")
    }
}

export const GET_LIST_USER_SAGA = function* () {
    try {
        let listUser = yield call(productServices.USER_GET_SERVICE)
        yield put(actions.act_get_list_users_success(listUser))
        //    yield put(actions.act_get_list_users_success(listUser))

    } catch (error) {

    }
}


export const GET_UPDATE_USER_SAGA = function* (preUser) {
    // console.log(preUser.payload);
    try {
        yield call(productServices.USER_PATCH_SERVICE,preUser.payload)
        yield put(actions.act_get_list_user())
        yield alert("Cập nhật thành công")
    } catch (error) {
        alert("Kiểm tra lại mật khẩu")
    }
}

export const GET_ACTIVE_USER_SAGA = function* (activeUser) {
    console.log(activeUser);

    try {
        yield call(productServices.USER_PATCH_ACTIVE_SERVICE,activeUser.payload)
        yield put(actions.act_get_list_user())
    } catch (error) {
        alert("Kiểm tra lại mật khẩu")
    }
}


export const GET_DELETE_USER_SAGA = function* (useId) {
    // console.log(useId);
    try {
        yield call(productServices.USER_DELETE_SERVICE,useId.payload)
        yield put(actions.act_get_list_user())
    } catch (error) {
        alert("Không thể xóa")
    }
}