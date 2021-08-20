import { Dispatch } from "redux"
import { ReduxStore } from "../../types/ReduxStore"
import { Weather } from "../../types/WeatherList"
import * as actionTypes from "./actionTypes"

export const selectedWeatherAction = (selectedWeather:Weather) => ({
    type: actionTypes.GET_WEATHER_DETAILS,
    payload: selectedWeather
})

export const fetchFiveDayWeatherAction = (city:string) => {
    return async (dispatch: Dispatch, getState:() => ReduxStore) => {
        try {
            
            const response = await fetch(`${process.env.REACT_APP_URL}/forecast?q=${city}&appid=${process.env.REACT_APP_API_ID}&units=metric`)
            const data = await response.json()
            console.log(data);
            if(response.ok){
                const weatherArray = data.list
                console.log(weatherArray);
                dispatch({
                    type: actionTypes.FETCH_WEATHER_ARRAY,
                    payload: weatherArray
                })
                console.log(getState);                
            }            
        } catch (error) {
            console.log(error);            
        }
    }
}

export const fetchCurrentDayWeatherAction = (city:string) => {
    return async (dispatch: Dispatch, getState:() => ReduxStore) => {
        try {            
            const response = await fetch(`${process.env.REACT_APP_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_ID}&units=metric`)
            const weather = await response.json()
            console.log(weather);
            if(response.ok){
                dispatch({
                    type: actionTypes.FETCH_CURRENT_DAY_WEATHER,
                    payload: weather
                })
                console.log(getState);                
            }            
        } catch (error) {
            console.log(error);            
        }
    }
}