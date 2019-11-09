import React, { useEffect } from 'react'
import '../pages/index.scss'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { GET_POSTS_REQUEST } from '../reducers/post/postAction'
// import Card from '../Function/card'

const write = () => {
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>제목</Form.Label>
                <Form.Control type="text" placeholder="ex)40대 아버지 생신선물" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>#태그</Form.Label>
                <Form.Control type="text" placeholder="ex)#20대, #대학생, #여성, #생일" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>내용</Form.Label>
                <Form.Control as="textarea" rows="5" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
  </Button>
        </Form>
    )
}

export default write;