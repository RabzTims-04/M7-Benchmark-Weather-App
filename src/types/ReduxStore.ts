import { CurrentDay } from "./CurrentDayWeather";
import { Weather } from "./WeatherList";

export interface ReduxStore{
    fiveDayWeather:{
        weatherArray:Weather[],
        selectedWeather:Weather | null
    }
    daySelected:{
        isSelected:boolean
    }
    currentDay:{
        weatherObj:CurrentDay | null
    }
}