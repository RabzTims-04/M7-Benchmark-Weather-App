import React from 'react'
import { Card, CardGroup } from "react-bootstrap"
import "./LeftSide.css"

const LeftCard = () => {
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
                <Card.Title>Card title</Card.Title>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default LeftCard
