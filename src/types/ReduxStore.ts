import { AirQuality } from "./AirQuality";
import { CurrentDay } from "./CurrentDayWeather";
import { SearchFiveDayWeather } from "./SearchFiveDayWeather";
import { Weather } from "./WeatherList";

export interface ReduxStore{
    fiveDayWeather:{
        weatherArray:Weather[],
        selectedWeather:Weather | null,
        timeArray:number[],
        temperatureArray:number[]
    }
    daySelected:{
        isSelected:boolean
    }
    currentDay:{
        weatherObj:CurrentDay | null
    }
    airQuality:{
        airQualityObj:AirQuality | null
    }
    searchWeather:{
        searchWeatherObj: CurrentDay | null,
        isLoading: boolean,
        isError: boolean,
        airQualityObj: AirQuality | null,
        fiveDayWeather: SearchFiveDayWeather | null,
        daySelected: boolean,
        selectedWeatherDay: Weather | null
    },
    favourites:{
        locations:CurrentDay[] 
    }
}