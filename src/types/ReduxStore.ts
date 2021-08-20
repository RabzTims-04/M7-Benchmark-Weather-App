import { CurrentDay } from "./CurrentDayWeather";
import { Weather } from "./WeatherList";

export interface ReduxStore{
    fiveDayWeather:{
        weatherArray:Weather[],
        selectedWeather:Weather | null
    }
    currentDay:{
        weatherObj:CurrentDay | null
    }
}