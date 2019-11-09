import { all, fork } from 'redux-saga/effects'
import axios from 'axios'

import post from './post'
import product from './product'
import comment from './comment'

export default function* rootSaga() {
    yield all([
        fork(post),
        fork(comment),
        fork(product)
    ])
}