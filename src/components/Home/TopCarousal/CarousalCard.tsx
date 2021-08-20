import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ReduxStore } from '../../../types/ReduxStore'


const CarousalCard = () => {

    const utcDay =(utcDate:string) => {
        const date = new Date(utcDate)
        const day = date.getDay()
        console.log(date);
        console.log(date.getHours());
        console.log(date.getMinutes());
        console.log(date.getUTCHours());
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

    return (
        <CardGroup className="text-center" id="carousal-card">
            {
            fiveDayWeather.weatherArray.map((array,i) => 
            <Card key={i} className="p-2 mx-1 imagetransition">
                <small className="text-light">{utcDay(array.dt_txt)}</small>
                <div className="py-2">
                 <Card.Img src="//ssl.gstatic.com/onebox/weather/48/partly_cloudy.png" />
                </div>
                <small className="text-muted mr-2">{array.main.feels_like}° -<span className="text-light ml-2"> {array.main.temp}°</span></small>                
            </Card>
            )}
       </CardGroup>
    )
}

export default CarousalCard
