import { fork, all, takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { } from '../reducers/post/postAction'
import { POST_RECOMMEND_PRODUCT_REQUEST, POST_RECOMMEND_PRODUCT_FAILURE, POST_RECOMMEND_PRODUCT_SUCCESS } from '../reducers/product/productAction'
import { POST_COMMENT_FAILURE, POST_COMMENT_REQUEST, POST_COMMENT_SUCCESS } from '../reducers/comment/commentAction'


function recommendAPI(data) {
    return axios.post('https://stopgomin-backend.herokuapp.com/api/writeComment', JSON.stringify(data))
}

function* commenting(action) {
    try {
        const result = false //yield call(recommendAPI, action.data) //api
        put({
            type: POST_COMMENT_SUCCESS,
            data: result
        })
    } catch (e) {
        console.error(e)
        put({
            type: POST_COMMENT_FAILURE,
            data: e
        })
    }
}

function* watchCommenting() {
    yield takeLatest(POST_COMMENT_REQUEST, commenting)
}

export default function* rootComment() {
    yield all([
        fork(watchCommenting),
    ])
}