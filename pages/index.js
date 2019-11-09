import React from 'react'
// import './index.css'

import { Button } from 'react-bootstrap'


const Index = () => {

    return (
        <div className="container">
            <div className="question">
                <text>뭐 사주지?</text><br />
                <text>어떤 선물을 할지 막막한 당신</text>
                <button
                    style={backgroundcolor = 'red'}>STOP</button>
                <Button variant="danger" size="lg">STOP</Button>
            </div>
            <div className="community">
                <text>이거 사줄까?</text><br />
                <text>생각한 선물에 대해 조언받고 싶은 당신</text>
                <Button variant="primary" size="lg">GO</Button>
            </div>
        </div >
    )
}

// const container = {
//     width: '100%';
//     height: '100%';
//     backgroundcolor: 'red';
// }
// const fontSt = {

// }

export default Index