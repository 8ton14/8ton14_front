import React, { useEffect } from 'react'
import '../pages/index.scss'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import { GET_POSTS_REQUEST } from '../reducers/post/postAction'
// import Card from '../Function/card'

const community = () => {
    const dispatch = useDispatch()
    const { post } = useSelector(state => state.post)

    useEffect(() => {
        dispatch({
            type: GET_POSTS_REQUEST
        })
    }, [])

    return (
        <Card style={{ width: '18rem' }}>
            {post && post.map(item => {
                return (
                    <>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.tags && item.tags.map(v => {
                                    return (
                                        <p>{v}</p>
                                    )
                                })}
                            </Card.Text>
                            <Button variant="primary">more</Button>
                        </Card.Body>
                    </>
                )
            })}
        </Card>
    )
}

export default community;