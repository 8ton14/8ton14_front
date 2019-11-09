import produce from 'immer'

import { GET_COMMENT_FAILURE, GET_COMMENT_REQUEST, GET_COMMENT_SUCCESS, POST_COMMENT_FAILURE, POST_COMMENT_REQUEST, POST_COMMENT_SUCCESS } from './commentAction'

const initialState = {
    isSuccess: false,
}

export default (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {

            // 댓글 작성하기
            case POST_COMMENT_REQUEST: {
                draft.isSuccess = false
                break;
            }
            case POST_COMMENT_FAILURE: {
                draft.isSuccess = false
                break;
            }
            case POST_COMMENT_SUCCESS: {
                draft.isSuccess = true
                break;
            }
            default: {
                return draft;
            }
        }
    })
}