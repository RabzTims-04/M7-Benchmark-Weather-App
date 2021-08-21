import React, { ChangeEvent, MouseEvent } from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { selectedDayAction, selectedWeatherAction } from '../../../redux/actions/action'
import { ReduxStore } from '../../../types/ReduxStore'

const CarousalCard = () => {

    const weatherImg =(forecast:string) => {
        if(forecast === "Clouds"){
            return "//ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
        }else if(forecast === "Rain"){
            return "//ssl.gstatic.com/onebox/weather/48/thunderstorms.png"
        }else{
            return "//ssl.gstatic.com/onebox/weather/48/sunny.png"
        }
    }

    const utcTime=(utcTime:string) => {
        const date = new Date(utcTime)
        const time = date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',            
            hour12:true
        })
        console.log(time);
        
        return time
    }

    const utcDay =(utcDate:string) => {
        const date = new Date(utcDate)
        const day = date.getDay()
        console.log(day);
        if(day === 1){
            return "Mon"
        }else if(day === 2){
            return "Tue"
        }
        else if(day === 3){
            return "Wed"
        }
        else if(day === 4){
            return "Thu"
        }
        else if(day === 5){
            return "Fri"
        }
        else if(day === 6){
            return "Sat"
        }
        else{
            return "Sun"
        }    }

    const  { fiveDayWeather } = useSelector((state:ReduxStore) => state)
    const dispatch = useDispatch()

    return (
        <CardGroup className="text-center" id="carousal-card">
            {
            fiveDayWeather.weatherArray.map((array,i) => 
            <Card 
            onClick={(e:MouseEvent<HTMLElement>) => 
                {
                    return (
                        dispatch(selectedWeatherAction(array)),dispatch(selectedDayAction(true))
                    )
                }
                }
            key={i} 
            className="p-2 mx-1 imagetransition">
                <small className="text-light">{utcDay(array.dt_txt)} {utcTime(array.dt_txt)}</small>
                <div className="py-2">
                 <Card.Img src={weatherImg(array.weather[0].main)} />
                </div>
                <small className="text-muted mr-2">{Math.round(array.main.feels_like)}°<span className="text-light ml-2 mx-3"> {
                Math.round(array.main.temp)}°</span></small>                
            </Card>
            )}
       </CardGroup>
    )
}

export default CarousalCard
