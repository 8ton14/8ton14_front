import { fork, all, takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { } from '../reducers/post/postAction'


function* posting() {

}

function* watchPosting() {
    yield takeLatest(POST_POSTS_REQUEST, posting)
}

export default function* rootPost() {
    yield all([
        watchPosting,
    ])
}