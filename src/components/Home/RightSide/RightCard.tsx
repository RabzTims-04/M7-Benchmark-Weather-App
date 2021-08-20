import React from 'react'
import { useEffect } from 'react'
import { Card, Image, Row, Col } from 'react-bootstrap'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { fetchCurrentDayWeatherAction } from '../../../redux/actions/action'
import { connect } from 'react-redux'
import { CurrentDay } from '../../../types/CurrentDayWeather'
import { ReduxStore } from '../../../types/ReduxStore'
import { Weather } from '../../../types/WeatherList'

const mapStateToProps = (state:ReduxStore) => ({
    currentDay: state.currentDay.weatherObj,
    selectedDay:state.fiveDayWeather.selectedWeather
})

const mapDispatchToProps = (dispatch:ThunkDispatch<Action, any, any>) => ({
    currentWeather: (city: string) =>dispatch(fetchCurrentDayWeatherAction(city))
})

interface RightCardProps{
    currentWeather:(city:string) => void
    currentDay: CurrentDay | null
    selectedDay: Weather | null
    
}

const RightCard = ({currentWeather,currentDay, selectedDay}:RightCardProps) => {
    
    useEffect(() => {
        currentWeather("saarbrücken")
       },[])

       const weatherImg =(forecast:string) => {
        if(forecast === "Clouds"){
            return "//ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
        }else if(forecast === "Rain"){
            return "//ssl.gstatic.com/onebox/weather/48/thunderstorms.png"
        }else{
            return "//ssl.gstatic.com/onebox/weather/48/sunny.png"
        }
    }

    const utcTime=(utcTime:number | string) => {
        const date = new Date(utcTime)
        const time = date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
        })
        console.log(date);
        
        return time
    }

    const utcDay =(utcDate:number | string) => {
        const date = new Date(utcDate)
        const day = date.getDay()
        console.log(day);
        if(day === 1){
            return "MONDAY"
        }else if(day === 2){
            return "TUESDAY"
        }
        else if(day === 3){
            return "WEDNESDAY"
        }
        else if(day === 4){
            return "THURSDAY"
        }
        else if(day === 5){
            return "FRIDAY"
        }
        else if(day === 6){
            return "SATURDAY"
        }
        else{
            return "SUNDAY"
        }    }

    return (
        <Card id='right-card' style={{ height: '28rem' }}>
            <Card.Body >
                <Image className="right-card-img" fluid 
                src={selectedDay? weatherImg(selectedDay?.weather[0].main) :weatherImg(currentDay?.weather[0].main!)} 
                alt="user avatar" />
                <Card.Title className="mt-5 pt-3">{currentDay?.name}</Card.Title>
                <Card.Text className="card-list">
                <div>
                <Card.Subtitle className="mb-2 text-muted pt-2">{selectedDay? selectedDay?.weather[0].main : currentDay?.weather[0].main}</Card.Subtitle>
                <small className="my-3">{selectedDay? selectedDay?.weather[0].description :currentDay?.weather[0].description}</small>
                </div>
                <p>{utcTime(selectedDay ? selectedDay?.dt_txt : currentDay?.dt!)}</p> 
                <span>{utcDay( selectedDay? selectedDay?.dt_txt : currentDay?.dt!)}</span>       
                </Card.Text>
                <div className="footer-details">
                <div className="d-flex justify-content-between pt-2">
                    <span>
                        Temperature
                    </span>
                    <span>
                        {selectedDay? Math.round(selectedDay?.main.temp) : Math.round(currentDay?.main.temp!)}°C
                    </span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>
                        Feels Like
                    </span>
                    <span>
                        {selectedDay? Math.round(selectedDay?.main.feels_like) : Math.round(currentDay?.main.feels_like!)}°C
                    </span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>
                        Min Temprature
                    </span>
                    <span>
                        {selectedDay? Math.round(selectedDay?.main.temp_min) : Math.round(currentDay?.main.temp_min!)}°C
                    </span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>
                        Max Temperature
                    </span>
                    <span>
                        {selectedDay? Math.round(selectedDay?.main.temp_max) : Math.round(currentDay?.main.temp_max!)}°C
                    </span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>
                        Humidity
                    </span>
                    <span>
                        {selectedDay? selectedDay?.main.humidity : currentDay?.main.humidity}%
                    </span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>
                        Pressure
                    </span>
                    <span>
                        {selectedDay? selectedDay?.main.pressure : currentDay?.main.pressure} hpa
                    </span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>
                        Wind
                    </span>
                    <span>
                        {selectedDay? Math.round(selectedDay?.wind.speed) * 10 : Math.round(currentDay?.wind.speed!) * 10} km/h
                    </span>
                </div> 
                </div> 
            </Card.Body>
        </Card>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RightCard)
