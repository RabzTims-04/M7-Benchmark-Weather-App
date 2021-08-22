import { MouseEvent } from 'react'
import { Card, Image } from 'react-bootstrap'
import { searchSelectedDayAction } from '../../../redux/actions/action'
import { useSelector, useDispatch } from 'react-redux'
import { ReduxStore } from '../../../types/ReduxStore'
import { AiOutlineHome } from "react-icons/ai"
import { withRouter, Link } from 'react-router-dom'
import Moment from 'react-moment'
import moment from 'moment'

const RightCard = () => {
    
       const { searchWeather} = useSelector((state:ReduxStore) => state)
       const { searchWeatherObj, daySelected, selectedWeatherDay, fiveDayWeather } = searchWeather
       const dispatch= useDispatch()

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

    const utcTime=(offset:number, date?:number) => {
        const newDate = date ? new Date(date) : new Date()
        const inMinutes = offset/60 
        const currTime = moment(newDate).utcOffset(inMinutes).format('hh:mm A')
        console.log(currTime);        
        return currTime
    }

    const utcDay =(utcDate:number) => {
        const date = new Date(utcDate * 1000)
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
                src={daySelected? weatherImg(selectedWeatherDay?.weather[0].main!) : weatherImg(searchWeatherObj?.weather[0].main!)} 
                alt="user avatar" />
                {daySelected && 
                <Link onClick={(e:MouseEvent<HTMLElement>) => dispatch(searchSelectedDayAction(false))} to="/search">
                    <AiOutlineHome style={{width:"18px", height:"18px"}} />
                </Link>}
             
                <Card.Title className="mt-5 pt-3">{searchWeatherObj?.name}</Card.Title>
                <Card.Text className="card-list">
                <div>
                <Card.Subtitle className="mb-2 text-muted pt-2">{daySelected? selectedWeatherDay?.weather[0].main : searchWeatherObj?.weather[0].main}</Card.Subtitle>
                <Image src={`http://openweathermap.org/img/wn/${daySelected? selectedWeatherDay?.weather[0].icon : searchWeatherObj?.weather[0].icon}.png`} />
                <small className="my-3">{daySelected? Math.round(selectedWeatherDay?.main.temp!) : Math.round(searchWeatherObj?.main.temp!)}°C</small>
                <small className="d-block">{daySelected? selectedWeatherDay?.weather[0].description :searchWeatherObj?.weather[0].description}</small>
                </div>
                <p>{utcTime(daySelected? (fiveDayWeather?.city.timezone , (selectedWeatherDay?.dt!) * 1000) : searchWeatherObj?.timezone!)}</p>
                <span>
                    {utcDay( daySelected? selectedWeatherDay?.dt! : searchWeatherObj?.dt!)}, {' '}  
                    <Moment format="DD MM YYYY">{daySelected? (selectedWeatherDay?.dt!) * 1000 : (searchWeatherObj?.dt!)* 1000 }</Moment>
                    </span> 
                </Card.Text>
                <div className="footer-details">
                <div className="d-flex justify-content-between">
                    <span>Feels Like</span>
                    <span>
                        {daySelected? Math.round(selectedWeatherDay?.main.feels_like!) : Math.round(searchWeatherObj?.main.feels_like!)}°C
                    </span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Min Temprature</span>
                    <span>
                        {daySelected? Math.round(selectedWeatherDay?.main.temp_min!) : Math.round(searchWeatherObj?.main.temp_min!)}°C
                    </span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Max Temperature</span>
                    <span>
                        {daySelected? Math.round(selectedWeatherDay?.main.temp_max!) : Math.round(searchWeatherObj?.main.temp_max!)}°C
                    </span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Humidity</span>
                    <span>
                        {daySelected? selectedWeatherDay?.main.humidity : searchWeatherObj?.main.humidity}%
                    </span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Pressure</span>
                    <span>
                        {daySelected? selectedWeatherDay?.main.pressure : searchWeatherObj?.main.pressure} hpa
                    </span>
                </div>
                <div className="d-flex justify-content-between px-0 mx-0">
                    <span> Wind</span>  
                    <span>                        
                        {daySelected? Math.round(selectedWeatherDay?.wind.speed!) * 10 : Math.round(searchWeatherObj?.wind.speed!) * 10} km/h
                    </span>
                </div> 
                </div> 
            </Card.Body>
        </Card>
    )
}

export default withRouter(RightCard)
