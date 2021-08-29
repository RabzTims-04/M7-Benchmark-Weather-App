import { MouseEvent } from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Weather } from '../../../../types/WeatherList'
import { selectedDayAction, selectedWeatherAction } from '../../../../redux/actions/action'
import { CurrentDay } from '../../../../types/CurrentDayWeather'
import { ReduxStore } from '../../../../types/ReduxStore'
import moment from "moment"

interface CarousalCardProps{
    fiveDayWeatherProps: {
        weatherArray: Weather[],
        selectedWeather:Weather | null,
        timeArray:number[],
        temperatureArray:number[]
    },
    currentDayProps:{
        weatherObj: CurrentDay | null
    }
}

const CarousalCard = ({fiveDayWeatherProps, currentDayProps}:CarousalCardProps) => {

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
        const inMinutes = currentDayProps.weatherObj?.timezone!/60
        const newdate = moment(date).utcOffset(inMinutes).format('hh:mm A')              
        return newdate
    }

    const utcDay =(utcDate:number) => {
        const date = new Date(utcDate * 1000)
        const inMinutes = currentDayProps.weatherObj?.timezone!/60 
        const currTime = moment(date).utcOffset(inMinutes).format('ddd') 
        return currTime 
    }

    const dispatch = useDispatch()

    return (
        <CardGroup className="text-center" id="carousal-card">
            {
            fiveDayWeatherProps.weatherArray.map((array,i) => 
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
