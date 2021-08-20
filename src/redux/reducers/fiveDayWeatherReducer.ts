import { initialState } from "../store/store";
import { FETCH_WEATHER_ARRAY, GET_WEATHER_DETAILS } from "../actions/actionTypes";
import { AnyAction } from "redux";

const fiveDayWeatherReducer = (state= initialState.fiveDayWeather, action: AnyAction) => {
    switch(action.type){
        case FETCH_WEATHER_ARRAY: return {
            ...state,
            weatherArray: action.payload
        }
        case GET_WEATHER_DETAILS: return {
            ...state,
            selectedWeather: action.payload
        }
        default:{
            return state
        }
    }
}

export default fiveDayWeatherReducer