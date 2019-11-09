import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GET_POST_REQUEST } from '../../reducers/post/postAction'
import { Form, Button } from 'react-bootstrap'
import { POST_COMMENT_REQUEST } from '../../reducers/comment/commentAction'

const Detail = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [comment, setComment] = useState('')
    const { post } = useSelector(state => state.post)
    const { isSuccess } = useDispatch(state => state.comment)

    useEffect(() => {
        dispatch({
            type: GET_POST_REQUEST,
            data: {
                postId: router.query.id
            }
        })
    }, [])

    useEffect(() => {
        if (isSuccess) {
            Router.push('/')
        }
    }, [isSuccess])



    const onChangeComment = (e) => {
        setComment(e.target.value)
    }

    const onSubmitComment = (e) => {
        e.preventDefault()
        dispatch({
            type: POST_COMMENT_REQUEST,
            data: {
                postId: router.query.id,
                content: comment
            }
        }
        )
    }


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

            <Form onSubmit={onSubmitComment}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea" rows="5" value={comment} onChange={onChangeComment} />
                </Form.Group>

                <Button type="submit">댓글작성</Button>
            </Form>

        </>

    )
}

export default Detail