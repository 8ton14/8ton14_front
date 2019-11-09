import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GET_POST_REQUEST } from '../../reducers/post/postAction'

const Detail = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { post } = useSelector(state => state.post)

    useEffect(() => {
        dispatch({
            type: GET_POST_REQUEST,
            data: router.query.id
        })
    }, [])


    return (
        <>
            {
                post
                    ?
                    <>
                        <div className="title">{post.title}</div>
                        <div>{post.content}</div>
                        {post.tags && post.tags.map(item => {
                            return (<div>{item}</div>)
                        })}
                        {post.comments && post.comments.map(item => {
                            return (
                                <>
                                    <div className="comment">{item.content}</div>
                                    <div className="like">좋아요 수 : {item.likes}</div>
                                </>
                            )
                        })}
                    </>
                    :
                    <div>404 not found </div>
            }

        </>

    )
}

export default Detail