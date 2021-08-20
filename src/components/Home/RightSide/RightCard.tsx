import React from 'react'
import { useEffect } from 'react'
import { Card, Image, Row, Col } from 'react-bootstrap'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { fetchCurrentDayWeatherAction } from '../../../redux/actions/action'
import { connect } from 'react-redux'
import { CurrentDay } from '../../../types/CurrentDayWeather'
import { ReduxStore } from '../../../types/ReduxStore'

const mapStateToProps = (state:ReduxStore) => ({
    currentDay: state.currentDay.weatherObj
})

const mapDispatchToProps = (dispatch:ThunkDispatch<Action, any, any>) => ({
    currentWeather: (city: string) =>dispatch(fetchCurrentDayWeatherAction(city))
})

interface RightCardProps{
    currentWeather:(city:string) => void
    currentDay: CurrentDay | null
    
}

const RightCard = ({currentWeather,currentDay}:RightCardProps) => {
    
    useEffect(() => {
        currentWeather("saarbrücken")
       },[])

    return (
        <Card id='right-card' style={{ height: '28rem' }}>
            <Card.Body >
                <Image className="right-card-img" fluid src="//ssl.gstatic.com/onebox/weather/48/thunderstorms.png" alt="user avatar" />
                <Card.Title className="mt-5 pt-3">{currentDay?.name}</Card.Title>
                <Card.Text className="card-list">
                <div>
                <Card.Subtitle className="mb-2 text-muted pt-2">{currentDay?.weather[0].main}</Card.Subtitle>
                <small className="my-3">{currentDay?.weather[0].description}</small>
                </div>
                <div className="d-flex justify-content-between pt-5">
                    <span>
                        Temperature
                    </span>
                    <span>
                        {currentDay?.main.temp}
                    </span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>
                        Feels Like
                    </span>
                    <span>
                        {currentDay?.main.feels_like}
                    </span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>
                        Min Temprature
                    </span>
                    <span>
                        {currentDay?.main.temp_min}
                    </span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>
                        Max Temperature
                    </span>
                    <span>
                        {currentDay?.main.temp_max}
                    </span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>
                        Pressure
                    </span>
                    <span>
                        {currentDay?.main.pressure}
                    </span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>
                        Humidity
                    </span>
                    <span>
                        {currentDay?.main.humidity}
                    </span>
                </div>
                </Card.Text>
                <Row className="justify-content-between pt-2 footer-details">
                    <Col md={6}>
                    <span>wind degree/ </span>
                    <span>{currentDay?.wind.deg}</span>
                    <br/>
                    <span>speed/ </span>
                    <span>{currentDay?.wind.speed}</span>
                    </Col>
                    <Col md={6}>
                    <p></p>
                    <span>Visibility __</span>
                    <span>{currentDay?.visibility}</span>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RightCard)
