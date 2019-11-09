import produce from 'immer'

import { GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, POST_POSTS_REQUEST, POST_POSTS_FAILURE, POST_POSTS_SUCCESS } from './postAction'


const initialState = {
    post: ["123123"]
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

export default (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {

            // 게시글 전부 가져오기
            case GET_POSTS_REQUEST: {
                break;
            };
            case GET_POSTS_FAILURE: {
                break;
            }
            case GET_POSTS_SUCCESS: {
                console.log(dummy)
                draft.post = action.data
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