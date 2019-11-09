import React from 'react'
import { useSelector } from 'react-redux'
import { Accordion, Card, Button } from 'react-bootstrap'
import Link from 'next/link'


const RecommendItem = () => {

    const { product } = useSelector(state => state.product)


    return (
        <>
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
                                        <Card.Body>{item.comment.map(value => {
                                            return (<Link href={`community/${value.postId}`}><a><div>좋아요: {value.like}</div>{value.content}</a></Link>)
                                        })}</Card.Body>
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