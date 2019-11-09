import React from 'react'
import '../pages/index.scss'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

const Card = () => {
    return (
        <div className="card">
            <div className="img"></div>
            <div className="content">
                <div className="cTitle">ddddd</div>
                <div className="cTag">
                    <text className="cardText">태그1</text>
                    <text className="cardText">태그2</text>
                    <text className="cardText">태그3</text>
                    <text className="cardText">태그4</text>
                    <text className="cardText">태그5</text>
                </div>
                <div className="cButton"><button>ggg</button></div>
            </div>
        </div >
    )
}

export default Card;