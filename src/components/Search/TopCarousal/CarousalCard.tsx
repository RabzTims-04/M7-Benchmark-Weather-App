import React, { ChangeEvent, MouseEvent } from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { searchSelectedDayAction, searchSelectedWeatherAction } from '../../../redux/actions/action'
import { ReduxStore } from '../../../types/ReduxStore'

const CarousalCard = () => {

    const weatherImg =(forecast:string) => {
        if(forecast === "Clouds"){
            return "//ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
        }else if(forecast === "Thunderstorm"){
            return "//ssl.gstatic.com/onebox/weather/48/thunderstorms.png"
        }else if(forecast === "Rain"){
            return "//ssl.gstatic.com/onebox/weather/48/rain.png"
        }else{
            return "//ssl.gstatic.com/onebox/weather/48/sunny.png"
        }
    }

    const utcTime=(utcTime:number) => {
        const date = new Date(utcTime * 1000)
        const time = date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',            
            hour12:true
        })
        console.log(time);
        
        return time
    }

    const utcDay =(utcDate:number) => {
        const date = new Date(utcDate * 1000)
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

    const  { searchWeather } = useSelector((state:ReduxStore) => state)
    const { fiveDayWeather } = searchWeather
    const fiveDayWeatherArr = fiveDayWeather?.list
    const dispatch = useDispatch()

    return (
        <CardGroup className="text-center" id="search-carousal-card">
            {
            fiveDayWeatherArr && fiveDayWeatherArr.map((array,i) => 
            <Card 
            onClick={(e:MouseEvent<HTMLElement>) => 
                {
                    return (
                        dispatch(searchSelectedWeatherAction(array)),dispatch(searchSelectedDayAction(true))
                    )
                }
                }
            key={i} 
            className="p-2 mx-1 imagetransition">
                <small className="text-light">{utcDay(array.dt)} {utcTime(array.dt)}</small>
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
