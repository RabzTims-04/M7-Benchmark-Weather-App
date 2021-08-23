import React from 'react'
import { Card, CardGroup, Image } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { ReduxStore } from '../../../types/ReduxStore'
import Moment from 'react-moment'
import GoogleMap from './GoogleMap'
import "./LeftSide.css"

const LeftCardTop = () => {
    
    const  { searchWeather } = useSelector((state:ReduxStore) => state)
    const { searchWeatherObj } = searchWeather

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
                <Card.Body className="pb-0">
                <Card.Title className="pt-2">Sunrise & Sunset</Card.Title>
                <ul className="pt-2" style={{listStyle:'none', paddingLeft:"0"}}>
                    <li>
                        <Image style={{marginRight:'1.5rem'}} src='http://openweathermap.org/img/wn/02d.png' alt="sunrise-icon"/>
                        <Moment style={{fontSize:"x-large"}} format="hh:mm:ss"
                        utc add={{s:searchWeatherObj?.timezone}}>{(searchWeatherObj?.sys.sunrise!) * 1000}</Moment>                        
                    </li>
                    <li>
                        <Image style={{marginRight:'1.5rem'}} src='http://openweathermap.org/img/wn/02n.png' alt="sunset-icon"/>
                        <Moment style={{fontSize:"x-large"}} format="hh:mm:ss"
                        utc add={{s:searchWeatherObj?.timezone}}>{(searchWeatherObj?.sys.sunset!) * 1000}</Moment>  
                    </li>
                </ul>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default LeftCardTop
