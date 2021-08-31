import { KeyboardEvent } from "react"
import { Dispatch } from "redux"
import { ReduxStore } from "../../types/ReduxStore"
import { Weather } from "../../types/WeatherList"
import * as actionTypes from "./actionTypes"
import moment from "moment"
import { CurrentDay } from "../../types/CurrentDayWeather"

export const selectedWeatherAction = (selectedWeather:Weather) => ({
    type: actionTypes.GET_WEATHER_DETAILS,
    payload: selectedWeather
})

export const selectedDayAction = (selected:boolean) => ({
    type: actionTypes.DAY_SELECTED,
    payload: selected
})

export const searchSelectedWeatherAction = (selectedWeather:Weather) => ({
    type: actionTypes.GET_SEARCH_DAY_SELECTED,
    payload: selectedWeather
})

export const searchSelectedDayAction = (selected:boolean) => ({
    type: actionTypes.SEARCH_DAY_SELECTED,
    payload: selected
})

export const addToFavouritesAction = (location:CurrentDay) => ({
    type: actionTypes.ADD_TO_FAVOURITES,
    payload: location
})

export const removeFromFavouritesAction = (location:CurrentDay) => ({
    type: actionTypes.REMOVE_FROM_FAVOURITES,
    payload: location
})

export const logoutUserAction = () => ({
    type: actionTypes.LOGOUT_USER
})

export const fetchFiveDayWeatherAction = (city:string) => {
    return async (dispatch: Dispatch, getState:() => ReduxStore) => {
        try {            
            const response = await fetch(`${process.env.REACT_APP_URL}/forecast?q=${city}&appid=${process.env.REACT_APP_API_ID}&units=metric`)
            const data = await response.json()
            console.log(data);
            const weatherArray = await data.list
            let arrayTime = await weatherArray.slice(0,10).map((a: { dt: number }) => moment(a.dt * 1000).format('hh:mm'))
            let arrayTemp = await weatherArray.slice(0,10).map((t: { main: { temp: number } }) => t.main.temp)
            if(response.ok){
                dispatch({
                    type: actionTypes.GET_TIME_ARRAY,
                    payload: arrayTime
                })
                dispatch({
                    type:actionTypes.GET_TEMPERATURE_ARRAY,
                    payload: arrayTemp
                })
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
                const airQuality = await fetchAirQualityAction(weather.coord.lat, weather.coord.lon)
                if(airQuality){
                    dispatch({
                        type: actionTypes.FETCH_AIR_QUALITY,
                        payload: airQuality
                    })
                }           
            }            
            console.log(getState); 
        } catch (error) {
            console.log(error);            
        }
    }
}

const fetchAirQualityAction = async (lat:number, lon:number) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_ID}`)
           const airQuality = await response.json() 
           return await airQuality              
        } catch (error) {
            console.log(error);            
        }
}

export const fetchSearchWeatherAction = ( city:string, e?:KeyboardEvent<HTMLInputElement>) => {
    return async (dispatch: Dispatch, getState:() => ReduxStore) => {
        if(city === ""){
            dispatch({
                type: actionTypes.FETCH_SEARCH_WEATHER,
                payload: null
            })
        }else{
        if(e){
        if(e.key === "Enter"){
            e.preventDefault()
        try {    
            dispatch({
                type: actionTypes.SEARCH_WEATHER_LOADING,
                payload: true
            })      
            const response = await fetch(`${process.env.REACT_APP_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_ID}&units=metric`)
            const weather = await response.json()
            console.log(weather);
            if(response.ok){ 
                dispatch({
                    type: actionTypes.SEARCH_WEATHER_LOADING,
                    payload: false
                }) 
                dispatch({
                    type: actionTypes.FETCH_SEARCH_WEATHER,
                    payload: weather
                })
                dispatch({
                    type: actionTypes.SEARCH_WEATHER_ERROR,
                    payload: false
                })
                const airQuality = await fetchAirQualityAction(weather.coord.lat, weather.coord.lon)
                if(airQuality){
                    dispatch({
                        type: actionTypes.SEARCH_AIR_QUALITY,
                        payload: airQuality
                    })
                }  
                const weatherFiveObj = await fetchSearchFiveDayWeatherAction(city) 
                if(weatherFiveObj){
                    dispatch({
                        type: actionTypes.SEARCH_FIVE_DAY_WEATHER,
                        payload: weatherFiveObj
                    })
                }        
            }else{
                console.log('error fetching searchweather');
                dispatch({
                    type: actionTypes.SEARCH_WEATHER_ERROR,
                    payload: true
                })                
            }            
            console.log(getState); 
        } catch (error) {
            console.log(error); 
            dispatch({
                type: actionTypes.SEARCH_WEATHER_ERROR,
                payload: true
            })           
        }
    }
}else{
    console.log('no event');
    
}
}
    }
}

const fetchSearchFiveDayWeatherAction = async (city:string) => {
        try {            
            const response = await fetch(`${process.env.REACT_APP_URL}/forecast?q=${city}&appid=${process.env.REACT_APP_API_ID}&units=metric`)
            const data = await response.json()
            console.log(data);
            if(response.ok){
                return await data               
            }            
        } catch (error) {
            console.log(error);            
        }
}

export const fetchUserAction = () => {
    return async (dispatch: Dispatch, getState:() => ReduxStore) => {
    try {  
        dispatch({
            type: actionTypes.FETCH_USER_LOADING,
            payload: true
        })          
        const response = await fetch(`${process.env.REACT_APP_BE_URL}users/me`,{
            credentials: 'include',
        })
        const data = await response.json()
        console.log("user data",data);
        if(response.ok){
            dispatch({
                type: actionTypes.FETCH_USER_LOADING,
                payload: false
            })  
            dispatch({
                type: actionTypes.FETCH_USER,
                payload: data
            }) 
            dispatch({
                type: actionTypes.FETCH_USER_ERROR,
                payload: false
            })               
        } else{
            console.log("error fetching user");
            dispatch({
                type: actionTypes.FETCH_USER_ERROR,
                payload: true
            })             
        } 
        console.log(getState);           
    } catch (error) {
        console.log(error); 
        dispatch({
            type: actionTypes.FETCH_USER_ERROR,
            payload: true
        })            
    }
  }
}
