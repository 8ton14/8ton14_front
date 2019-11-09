import produce from 'immer'

import {
    GET_RECOMMEND_PRODUCT_FAILURE, GET_RECOMMEND_PRODUCT_REQUEST,
    GET_RECOMMEND_PRODUCT_SUCCESS, POST_RECOMMEND_PRODUCT_REQUEST,
    POST_RECOMMEND_PRODUCT_SUCCESS, POST_RECOMMEND_PRODUCT_FAILURE
} from './productAction'


const initialState = {
    id: 1
}

export default (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.data) {

            // 추천 해주는 상품 가져오기
            case GET_RECOMMEND_PRODUCT_REQUEST: {
                break;
            };
            case GET_RECOMMEND_PRODUCT_FAILURE: {
                break;
            }
            case GET_RECOMMEND_PRODUCT_SUCCESS: {
                break;
            }

            // 질문 내용 답하기
            case POST_RECOMMEND_PRODUCT_REQUEST: {
                break;
            }
            case POST_RECOMMEND_PRODUCT_FAILURE: {
                break;
            }
            case POST_RECOMMEND_PRODUCT_SUCCESS: {
                break;
            }
            default: {
                return draft;
            }
        }
    })
}