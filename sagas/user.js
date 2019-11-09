import { fork, all, takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { USER_LOGIN_REQUEST, USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS } from '../reducers/user/userAction'


function* login() {
    try {
        const result = false //api 요청
        yield put({
            type: USER_LOGIN_SUCCESS,
            data: result.data
        })
    } catch (e) {
        console.error(e);
        yield put({
            type: USER_LOGIN_FAILURE,
            data: e
        })
    }
}

function* watchLogin() {
    yield takeLatest(USER_LOGIN_REQUEST, login)
}

export default function* userSaga() {
    yield all([])
}