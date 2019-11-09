import { fork, all, takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { POST_POSTS_FAILURE, POST_POSTS_SUCCESS, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, POST_POSTS_REQUEST, GET_POST_SUCCESS, GET_POST_FAILURE, GET_POST_REQUEST } from '../reducers/post/postAction'


function* posting() {
    try {
        const result = false //api
        yield put({
            type: POST_POSTS_SUCCESS,
            data: result
        })
    } catch (e) {
        console.error(e)
        yield put({
            type: POST_POSTS_FAILURE,
            data: e
        })
    }
}

function* watchPosting() {
    yield takeLatest(POST_POSTS_REQUEST, posting)
}

const dummy = [
    {
        "id": 1,
        "title": "친구 생일선물로 지갑 어떤가요?",
        "content": "친구 생일선물로 40만원짜리 지갑 선물해려하는데요.\r\n남자 지갑 브랜드 추천해주세요",
        "tags": [
            "20대",
            "남자",
            "지갑",
            "친구",
            "생일"
        ]
    },
    {
        "id": 2,
        "title": "취업기념 부모님 선물",
        "content": "이번에 취업해서 첫월급을 받았습니다. 첫월급인만큼 부모님께 통크게 선물하나 해드릴까하는데요.\r\n200만원짜리 안마의자가 좋을까요? 아니면 다른 추천하시는게 있나요?",
        "tags": [
            "부모님",
            " 취업",
            " 선물",
            " 안마의자"
        ]
    }
]

function* getPostList() {
    try {
        const result = false //api
        yield put({
            type: GET_POSTS_SUCCESS,
            data: dummy
        })
    } catch (e) {
        console.error(e)
        yield put({
            type: GET_POSTS_FAILURE,
            data: e
        })
    }
}

function* watchGetPostList() {
    yield takeLatest(GET_POSTS_REQUEST, getPostList)
}

function* getPost() {
    try {
        const result = false //api
        yield put({
            type: GET_POST_SUCCESS,
            data: result
        })

    } catch (e) {
        console.error(e)
        yield put({
            type: GET_POST_FAILURE,
            data: e
        })
    }
}

function* watchGetPost() {
    yield takeLatest(GET_POST_REQUEST, getPost)
}

export default function* rootPost() {
    yield all([
        fork(watchPosting),
        fork(watchGetPostList),
        fork(watchGetPost)
    ])
}