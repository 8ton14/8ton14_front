import { fork, all, takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { } from '../reducers/post/postAction'
import { POST_RECOMMEND_PRODUCT_REQUEST, POST_RECOMMEND_PRODUCT_FAILURE, POST_RECOMMEND_PRODUCT_SUCCESS } from '../reducers/product/productAction'


function recommendAPI() {

}

function* recommending() {
    try {
        const result = false //api
        put({
            type: POST_RECOMMEND_PRODUCT_SUCCESS,
            data: result
        })
    } catch (e) {
        console.error(e)
        put({
            type: POST_RECOMMEND_PRODUCT_FAILURE,
            data: e
        })
    }
}

function* watchProduct() {
    yield takeLatest(POST_RECOMMEND_PRODUCT_REQUEST, recommending)
}

export default function* rootProduct() {
    yield all([
        watchProduct,
    ])
}