import produce from 'immer'

import {
    GET_RECOMMEND_PRODUCT_FAILURE, GET_RECOMMEND_PRODUCT_REQUEST,
    GET_RECOMMEND_PRODUCT_SUCCESS, POST_RECOMMEND_PRODUCT_REQUEST,
    POST_RECOMMEND_PRODUCT_SUCCESS, POST_RECOMMEND_PRODUCT_FAILURE
} from './productAction'


const initialState = {
    product: null,
    isLoading: false,
    isSuccess: false,
}

const dummy = [
    {
        name: "wallet",
        comment: [
            {
                "content": "이 지갑이 짱이에요!",
                like: 100,
                postId: 1
            },
            {
                "content": "반 지갑은 이게 짱입니다",
                like: 30,
                postId: 2
            }
        ],
    }
]

export default (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {

            // 추천 해주는 상품 가져오기
            case GET_RECOMMEND_PRODUCT_REQUEST: {
                break;
            };
            case GET_RECOMMEND_PRODUCT_FAILURE: {
                break;
            }
            case GET_RECOMMEND_PRODUCT_SUCCESS: {
                draft.product = dummy
                break;
            }

            // 질문 내용 답하기
            case POST_RECOMMEND_PRODUCT_REQUEST: {
                draft.isSuccess = false
                draft.isLoading = true
                break;
            }
            case POST_RECOMMEND_PRODUCT_FAILURE: {
                draft.isSuccess = false
                draft.isLoading = false
                break;
            }
            case POST_RECOMMEND_PRODUCT_SUCCESS: {
                draft.product = dummy
                draft.isSuccess = true
                draft.isLoading = false
                break;
            }
            default: {
                return draft;
            }
        }
    })
}