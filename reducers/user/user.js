import { USER_LOGIN_REQUEST, USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS } from './userAction'
import produce from 'immer'


const initialState = {
    username: '1'
}

export default (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.data) {
            //로그인 요청
            case USER_LOGIN_REQUEST: {
                break;
            }

            case USER_LOGIN_FAILURE: {
                break;
            }
            case USER_LOGIN_SUCCESS: {
                draft.user = action.data
            }
        }
    })
}