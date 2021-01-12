import axios from 'axios'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { CLEAR_ERROR_FAILURE, CLEAR_ERROR_REQUEST, CLEAR_ERROR_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, USER_LOADING_FAILURE, USER_LOADING_REQUEST, USER_LOADING_SUCCESS } from '../types'

// LOGIN USER API
const loginUserAPI = (loginData) => {
    console.log(loginData, "loginData")
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    return axios.post('api/auth', loginData, config);
}

function* loginUser(loginaction) {
    try{
        const result = yield call(loginUserAPI, loginaction.payload)
        console.log(result)
        yield put({
            type: LOGIN_SUCCESS,
            payload: result.data
        })
    } catch(e) {
        yield put({
            type: LOGIN_FAILURE,
            payload: e.response
        })
    }
}

function* watchLoginUser() {

    yield takeEvery(LOGIN_REQUEST, loginUser);

}

//LOGOUT USER
function* logoutUser(logoutaction) {
    try{
        yield put({
            type: LOGOUT_SUCCESS,
        });
    } catch(e) {
        yield put({
            type: LOGOUT_FAILURE,
        });
        console.log(e);
    }
}

function* watchLogoutUser() {

    yield takeEvery(LOGOUT_REQUEST, logoutUser);

}

// User loading USER API
const userLoadingAPI = (token) => {

    console.log(token, "token");

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if(token){
        config.headers["x-auth-token"] = token;
        return axios.get('api/auth/user', config);
    }else{
        return null;
    }
}

function* userLoading(action) {
    try{
        console.log(action, "userLoading");
        
        const result = yield call(userLoadingAPI, action.payload);

        if(result == null){
            throw new Error();
        }

        console.log(result)
        yield put({
            type: USER_LOADING_SUCCESS,
            payload: result.data
        })
    } catch(e) {
        yield put({
            type: USER_LOADING_FAILURE,
            payload: e.response
        })
    }
}

function* watchUserLoading() {

    console.log("watchuserLoading");
    yield takeEvery(USER_LOADING_REQUEST, userLoading);

}

// REGISTER USER API
const registUserAPI = (data) => {
    console.log(data, "data")

    return axios.post('api/user', data);
}

function* registUser(action) {
    try{
        const result = yield call(registUserAPI, action.payload)
        console.log(result, "Register return data")
        yield put({
            type: REGISTER_SUCCESS,
            payload: result.data
        })
    } catch(e) {
        yield put({
            type: REGISTER_FAILURE,
            payload: e.response
        })
    }
}

function* watchRegistUser() {

    yield takeEvery(REGISTER_REQUEST, registUser);

}

// CLEAR ERROR API
function* clearError() {
    try{
        console.log("ClearError");

        yield put({
            type: CLEAR_ERROR_SUCCESS
        })
    } catch(e) {
        yield put({
            type: CLEAR_ERROR_FAILURE
        })
    }
}

function* watchClearError() {

    yield takeEvery(CLEAR_ERROR_REQUEST, clearError);

}

//export
export default function* authSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogoutUser),
        fork(watchUserLoading),
        fork(watchRegistUser),
        fork(watchClearError),
    ]);
}