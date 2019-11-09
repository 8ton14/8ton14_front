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
        "name": "에어팟",
        "desc": "요즘 인싸아이템!! 지하철에서 에어팟을 안낀 사람이 없다!! 상대가 에이팟이 없다면!",
        "common_price": 200000,
        "comment": [],
        "weight": 0.85
    },
    {
        "name": "지갑",
        "desc": "설명",
        "common_price": 300000,
        "comment": [
            {
                "content": "남자면 몽블랑정도가 적당하지않을까요?",
                "likes": 2,
                "postID": 1
            }
        ],
        "weight": 0.8
    },
    {
        "name": "이모티콘",
        "desc": "선물주어야하지만 친하지않거나 가볍게 선물할때",
        "common_price": 2000,
        "comment": [],
        "weight": 0.78
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