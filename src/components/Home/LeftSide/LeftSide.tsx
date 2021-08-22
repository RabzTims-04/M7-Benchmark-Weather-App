import React from 'react'
import { Container, Row } from 'react-bootstrap'
import LeftCardTop from './LeftCardTop'
import LeftCardBottom from './LeftCardBottom'
import './LeftSide.css'

const LeftSide = () => {
    return (
        <Container>
            <h4 className="text-start">Today's Highlights</h4>
            <Row className="pt-3">
                <LeftCardTop/> 
            </Row>
            <Row className="py-4">
                <LeftCardBottom/>
            </Row>
        </Container>
    )
}

export default LeftSide
