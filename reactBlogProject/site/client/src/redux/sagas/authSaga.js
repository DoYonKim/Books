import axios from 'axios'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../types'

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

//export
export default function* authSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogoutUser),
    ]);
}