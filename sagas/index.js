import { all, fork } from 'redux-saga/effects'
import axios from 'axios'

import post from './post'

axios.defaults.baseURL = 'http://127.0.0.1.:8000'

export default function* rootSaga() {
    yield all([
        post,
    ])
}