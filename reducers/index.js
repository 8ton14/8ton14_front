import { combineReducers } from 'redux'

import product from './product/product'
import post from './post/post'
import comment from './comment/comment'

const rootReducer = combineReducers({
    product,
    post,
    comment
})

export default rootReducer