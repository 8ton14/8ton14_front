import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Row, Col, Button, ToggleButtonGroup, ToggleButton, Container, Navbar, Nav, Spinner } from 'react-bootstrap'
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Link from 'next/link'

import './QuestionForm.scss'
import { POST_RECOMMEND_PRODUCT_REQUEST } from '../../reducers/product/productAction';
import RecommendItem from '../RecommendItem'


function valuetext(value) {
    return `${value}만원`;
}


const QuestionForm = () => {
    const [sex, setSex] = useState('male')
    const [age, setAge] = useState('10')
    const [job, setJob] = useState('teenager')
    const [forWhat, setForWhat] = useState('exercise')
    const [favor, setFavor] = useState([])
    const [price, setPrice] = useState([0, 100])

    const dispatch = useDispatch()
    const { isLoading } = useSelector(state => state.product)

    const handleChange = (event, newValue) => {
        setPrice(newValue);
    };

    const onChangeForWhat = (values) => {
        setForWhat(values)
    }

    const onChangeSex = (e) => {
        setSex(e.target.value)
    }

    const onChangeAge = (e) => {
        setAge(e.target.value)
    }

    const onChangeJob = (e) => {
        setJob(e.target.value)
    }

    const onChangeFavorGroup = (values) => {
        setFavor(values)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        dispatch({
            type: POST_RECOMMEND_PRODUCT_REQUEST,
            data: {
                sex,
                age,
                job,
                favor,
                price,
                forWhat
            }
        })
    }

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

            <Container style={{ justifyContent: 'center', alignItems: 'center', margin: "0" }}>
                <Form onSubmit={onSubmitForm}>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Typography gutterBottom><h1>가격대</h1></Typography>
                                <Slider
                                    value={price}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    getAriaValueText={valuetext}
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Form.Label>
                                <h1>성별</h1>
                            </Form.Label>
                            <Col>
                                <Form.Control as="select" value={sex} onChange={onChangeSex} required>
                                    <option>male</option>
                                    <option>girl</option>
                                </Form.Control>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Form.Label>
                                <h1>나이대</h1>
                            </Form.Label>
                            <Col>
                                <Form.Control as="select" value={age} onChange={onChangeAge} required>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                    <option>40</option>
                                    <option>50</option>
                                </Form.Control>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Form.Label>
                                <h1>직업</h1>
                            </Form.Label>
                            <Col>
                                <Col>
                                    <Form.Control as="select" value={job} onChange={onChangeJob} required>
                                        <option>청소년</option>
                                        <option>대학생</option>
                                        <option>취준생</option>
                                        <option>직장인</option>
                                    </Form.Control>
                                </Col>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Form.Label>
                                <h1>관심사</h1>
                            </Form.Label>
                            <Col>
                                <ToggleButtonGroup type="checkbox" defaultValue={favor} onChange={onChangeFavorGroup}>
                                    <Form.Control as="select" value={sex} onChange={onChangeSex} required>
                                        <option>exercise</option>
                                        <option>beauty</option>
                                        <option>healthcare</option>
                                        <option>game</option>
                                        <option>it</option>
                                        <option>fashion</option>


                                    </Form.Control>
                                </ToggleButtonGroup>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Form.Label>
                                <h1>어떤 일때문에 선물하시려구요?</h1>
                            </Form.Label>
                            <Col>
                                <ToggleButtonGroup type="checkbox" defaultValue={favor} onChange={onChangeForWhat}>
                                    <ToggleButton variant="outline-dark" value="general">일상 선물</ToggleButton>
                                    <ToggleButton variant="outline-dark" value="anniversary">기념일 선물</ToggleButton>
                                    <ToggleButton variant="outline-dark" value="houses">집들이 선물</ToggleButton>
                                    <ToggleButton variant="outline-dark" value="celebrate">축하선물</ToggleButton>
                                    <ToggleButton variant="outline-dark" value="birthday">생일선물</ToggleButton>
                                </ToggleButtonGroup>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Button type="submit">
                        {isLoading
                            ?
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            :
                            <span>추천!</span>
                        }
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default QuestionForm
