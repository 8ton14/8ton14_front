import produce from 'immer'

import { GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, POST_POSTS_REQUEST, POST_POSTS_FAILURE, POST_POSTS_SUCCESS } from './postAction'


export default (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.data) {

            // 게시글 전부 가져오기
            case GET_POSTS_REQUEST: {
                break;
            };
            case GET_POSTS_FAILURE: {
                break;
            }
            case GET_POSTS_SUCCESS: {
                break;
            }

            // 게시글 작성
            case POST_POSTS_REQUEST: {
                break;
            }
            case POST_POSTS_FAILURE: {
                break;
            }
            case POST_POSTS_SUCCESS: {
                break;
            }
            default: {
                return draft;
            }
        }
    })
}