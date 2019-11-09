import React, { useEffect } from 'react'
import '../pages/index.scss'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
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

    const onClickButton = () => {

        dispatch({

        })
    }

    return (
        <div className="container_" >
            <div className="header">
                <Navbar bg="light" expand="lg">
                    <Link href="/index">
                        <a>
                            <Navbar.Brand href="#home" style={{ padding: '30px ' }} > STOP, GOMEAN</Navbar.Brand>
                        </a>
                    </Link>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link href="/write">
                                <a>
                                    <Nav.Link href="#home">뭐 사줄까?</Nav.Link>
                                </a>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className="middle" style={{ flexDirection: 'row', display: 'flex', flexWrap: 'wrap' }}>

                {post && post.map(item => {
                    return (
                        <div style={{ padding: '30px', justifyContent: 'center' }}>
                            <Card style={{ width: '400px', height: '200px', border: '1px solid black', justifyContent: 'center' }}>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.tags && item.tags.map(v => {
                                            return (
                                                <p className="tagText">{'#' + v}</p>
                                            )
                                        })}
                                    </Card.Text>
                                    <Link href={`community/${item.id}`}><a><Button variant="primary">more</Button></a></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}

            </div >
            <div className="bottom"></div>
        </div >
    )
}

export default community;