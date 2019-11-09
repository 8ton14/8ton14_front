import React from 'react'
import { useSelector } from 'react-redux'
import QuestionForm from '../Components/Form/QuestionForm'

import { } from 'react-bootstrap'
import RecommendItem from '../Components/RecommendItem'

const Question = () => {

    const { isSuccess } = useSelector(state => state.product)

    return (
        <>
            {
                isSuccess ?
                    <RecommendItem />
                    :
                    < QuestionForm />
            }
        </>
    )
}

export default Question