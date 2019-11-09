import React from 'react'
import { useSelector } from 'react-redux'
import { Accordion, Card, Button, Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

import './RecommentItem.scss'


const RecommendItem = () => {

    const { product } = useSelector(state => state.product)


    return (
        <>
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

            {product
                ?
                <Accordion defaultActiveKey="0">
                    {
                        product.map(item => {
                            return (
                                <Card >
                                    <Accordion.Toggle as={Card.Header} eventKey={item.name}>
                                        {item.name}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={item.name}>
                                        <Card.Body>
                                            <div className="desc">{item.desc}</div>
                                            <div className="common-price">평균가: {item.common_price} 만원</div>
                                            <div className="weight">{item.weight * 100}% 의 확률</div>
                                            <div className="comment">
                                                {item.comment.map(value => {
                                                    return (<Link href={`community/${value.postId}`}><a><div>좋아요: {value.like}</div>{value.content}</a></Link>)
                                                })}
                                            </div></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        })
                    }
                </Accordion >
                : <div>404 not found</div>
            }
        </>
    )
}

export default RecommendItem