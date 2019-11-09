import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Row, Col, Button, ToggleButtonGroup, ToggleButton, Container } from 'react-bootstrap'
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import './QuestionForm.scss'
import { POST_RECOMMEND_PRODUCT_REQUEST } from '../../reducers/product/productAction';


function valuetext(value) {
    return `${value}만원`;
}


const QuestionForm = () => {
    const [sex, setSex] = useState('남자')
    const [age, setAge] = useState('10대')
    const [job, setJob] = useState('')
    const [favor, setFavor] = useState([])
    const [price, setPrice] = useState([0, 100])
    const [validate, setValidate] = useState(false)

    const dispatch = useDispatch()

    const handleChange = (event, newValue) => {
        setPrice(newValue);
    };

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
        const form = e.current.target
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPagination()
        }
        setValidate(true)
        dispatch({
            type: POST_RECOMMEND_PRODUCT_REQUEST,
            data: {
                sex,
                age,
                job,
                favor,
                price
            }
        })
    }

    return (
        <Container>
            <Form novalidate validated={validate} onSubmit={onSubmitForm}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Typography gutterBottom>가격대</Typography>
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
                            성별
                    </Form.Label>
                        <Col>
                            <Form.Control as="select" value={sex} onChange={onChangeSex} required>
                                <option>남자</option>
                                <option>여자</option>
                            </Form.Control>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Form.Label>
                            나이대
                    </Form.Label>
                        <Col>
                            <Form.Control as="select" value={age} onChange={onChangeAge} required>
                                <option>10대</option>
                                <option>20대</option>
                                <option>30대</option>
                                <option>40대</option>
                                <option>50대이상</option>
                            </Form.Control>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Form.Label>
                            직업
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
                            관심사
                    </Form.Label>
                        <Col>
                            <ToggleButtonGroup type="checkbox" defaultValue={favor} onChange={onChangeFavorGroup}>
                                <ToggleButton value="exercise">운동</ToggleButton>
                                <ToggleButton value="beauty">미용</ToggleButton>
                                <ToggleButton value="healthcare">건강</ToggleButton>
                                <ToggleButton value="game">게임</ToggleButton>
                                <ToggleButton value="it">IT</ToggleButton>
                                <ToggleButton value="fashion">패션</ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                    </Row>
                </Form.Group>
                <Button type="submit">
                    추천!
            </Button>
            </Form>
        </Container>
    )
}

export default QuestionForm
