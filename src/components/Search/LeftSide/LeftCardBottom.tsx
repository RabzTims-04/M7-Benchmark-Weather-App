import React from 'react'
import { Card, CardGroup } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { ReduxStore } from '../../../types/ReduxStore'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import "./LeftSide.css"

const LeftCardBottom = () => {

    const qualityMeasure = () => {
        const airQualityMeasure = airQualityObj?.list[0].main.aqi
        if(airQualityMeasure === 1){
            return "Good"
        }else if(airQualityMeasure === 2){
            return "Fair"
        }else if(airQualityMeasure === 3){
            return "Moderate"
        }else if(airQualityMeasure === 4){
            return "Poor"
        }else{
            return "Very Poor"
        }
    }

    const { searchWeather } = useSelector((store:ReduxStore) => store)
    const { airQualityObj } = searchWeather
    const airQualityAqi = airQualityObj?.list[0].main.aqi
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
                <p className="pt-3">{airQualityObj?.list[0].components.co}</p>
                </Card.Body>
                <Card.Footer>
                <span className="mx-3">{qualityMeasure()}</span>
                <span className="mx-3 like-icon">{airQualityAqi === ( 1 || 2) ?<AiFillLike/> :<AiFillDislike/>}</span>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default LeftCardBottom
