import React from 'react'
import { Card, CardGroup } from "react-bootstrap"
import "./LeftSide.css"

const LeftCardBottom = () => {
    
    return (
        <CardGroup id="left-card">
            <Card >
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card className="mx-4">
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title className="pt-3">Air Quality</Card.Title>
                <p className="pt-3"></p>
                </Card.Body>
                <Card.Footer>
                <span className="mx-3"></span>
                <span className="mx-3 like-icon"></span>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default LeftCardBottom
