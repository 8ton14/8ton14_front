import React from 'react'
import './index.scss'
import Link from 'next/link'

import { Button } from 'react-bootstrap'


const Index = () => {

    return (
        <div className="container">
            <div className="question">
                <text className="Title">뭐 사주지?</text><br />
                <text className="SubTitle">어떤 선물을 할지 막막한 당신</text><br />
                <Link href="/question">
                    <a>
                        <Button variant="danger" size="lg">STOP</Button>
                    </a>
                </Link>
            </div>
            <div className="community">
                <text className="Title">이거 사줄까?</text><br />
                <text className="SubTitle">생각한 선물에 대해 조언받고 싶은 당신</text><br />
                <Link href="/community">
                    <a>
                        <Button variant="primary" size="lg">GO</Button>
                    </a>
                </Link>
            </div>
        </div >
    )
}

export default Index