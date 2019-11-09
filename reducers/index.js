import { combineReducers } from 'redux'

import product from './product/product'
import post from './post/post'

const rootReducer = combineReducers({
    product,
    post
})

export default rootReducer