import produce from 'immer'

import { GET_COMMENT_FAILURE, GET_COMMENT_REQUEST, GET_COMMENT_SUCCESS, POST_COMMENT_FAILURE, POST_COMMENT_REQUEST, POST_COMMENT_SUCCESS } from './commentAction'


export default (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.data) {

            // 댓글 가져오기
            case GET_COMMENT_REQUEST: {
                break;
            };
            case GET_COMMENT_FAILURE: {
                break;
            }
            case GET_COMMENT_SUCCESS: {
                break;
            }

            // 댓글 작성하기
            case POST_COMMENT_REQUEST: {
                break;
            }
            case POST_COMMENT_FAILURE: {
                break;
            }
            case POST_COMMENT_SUCCESS: {
                break;
            }
            default: {
                return draft;
            }
        }
    })
}