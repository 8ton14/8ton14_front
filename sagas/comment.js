import { fork, all, takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { } from '../reducers/post/postAction'
import { POST_RECOMMEND_PRODUCT_REQUEST, POST_RECOMMEND_PRODUCT_FAILURE, POST_RECOMMEND_PRODUCT_SUCCESS } from '../reducers/product/productAction'
import { POST_COMMENT_FAILURE } from '../reducers/comment/commentAction'


function recommendAPI() {

}

function* commenting() {
    try {
        const result = false //api
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
        watchCommenting,
    ])
}