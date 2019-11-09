import React, { useEffect, useState } from 'react'
import '../pages/index.scss'
import Link from 'next/link'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { GET_POSTS_REQUEST, POST_POSTS_REQUEST } from '../reducers/post/postAction'
// import Card from '../Function/card'


function getHashTags(inputText) {
    var regex = /(?:^|\s)(?:#)([a-zA-Z가-힣\d]+)/gm;
    var matches = [];
    var match;

    while ((match = regex.exec(inputText))) {
        matches.push(match[1]);
    }

    return matches;
}

const write = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [rawTags, setRawTags] = useState('')

    const { post_success } = useSelector(state => state.post)

    useEffect(() => {
        if (post_success) {
            Router.push('/community')
        }
    }, [post_success])
    const dispatch = useDispatch()

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeRawTags = (e) => {
        setRawTags(e.target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        const tags = getHashTags(rawTags)
        if (tags) {
            dispatch({
                type: POST_POSTS_REQUEST,
                data: {
                    title,
                    content,
                    tags
                }
            })
        }
    }

    const onChangeConent = (e) => {
        setContent(e.target.value)
    }
    return (
        <Form onSubmit={onSubmitForm}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>제목</Form.Label>
                <Form.Control type="text" placeholder="ex)40대 아버지 생신선물" value={title} onChange={onChangeTitle} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>#태그</Form.Label>
                <Form.Control type="text" placeholder="ex)#20대, #대학생, #여성, #생일" value={rawTags} onChange={onChangeRawTags} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>내용</Form.Label>
                <Form.Control as="textarea" rows="5" value={content} onChange={onChangeConent} />
            </Form.Group>

            <Button type="submit">작성</Button>
        </Form >
    )
}

export default write;