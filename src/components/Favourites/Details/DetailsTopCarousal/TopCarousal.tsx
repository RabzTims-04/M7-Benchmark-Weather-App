import { Carousel } from 'react-bootstrap'
import { Weather } from '../../../../types/WeatherList'
import CarousalCard from './CarousalCard'
import { CurrentDay } from '../../../../types/CurrentDayWeather'
import "./TopCarousal.css"

interface TopCarousalProps{
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

const TopCarousal = ({fiveDayWeatherProps, currentDayProps}:TopCarousalProps) => {

    return (
        <Carousel id="top-carousal" wrap={false} variant="dark" indicators={false} >           
            <Carousel.Item className="infinite-row">
              <CarousalCard fiveDayWeatherProps={fiveDayWeatherProps} currentDayProps={currentDayProps}  />
            </Carousel.Item>
        </Carousel>
    )
}

export default TopCarousal
