import React from 'react'
import { Container, Row } from 'react-bootstrap'
import LeftCard from './LeftCard'
import './LeftSide.css'

const LeftSide = () => {
    return (
        <Container>
            <h4 className="text-start">Today's Highlights</h4>
            <Row className="pt-3">
                <LeftCard/>
            </Row>
            <Row className="py-4">
                <LeftCard/>
            </Row>
        </Container>
    )
}

export default LeftSide
