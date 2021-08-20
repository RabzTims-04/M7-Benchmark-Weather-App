import { initialState } from "../store/store";
import { FETCH_WEATHER_ARRAY } from "../actions/actionTypes";
import { AnyAction } from "redux";

const fiveDayWeatherReducer = (state= initialState.fiveDayWeather, action: AnyAction) => {
    switch(action.type){
        case FETCH_WEATHER_ARRAY: return {
            ...state,
            weatherArray: action.payload
        }
        default:{
            return state
        }
    }
}

export default fiveDayWeatherReducer