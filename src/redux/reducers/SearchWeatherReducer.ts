import { initialState } from "../store/store";
import { FETCH_SEARCH_WEATHER, SEARCH_WEATHER_LOADING, SEARCH_WEATHER_ERROR, SEARCH_AIR_QUALITY, SEARCH_FIVE_DAY_WEATHER, SEARCH_DAY_SELECTED, GET_SEARCH_DAY_SELECTED } from "../actions/actionTypes";
import { AnyAction } from "redux";

const SearchWeatherReducer = (state= initialState.searchWeather, action: AnyAction) => {
    switch(action.type){
        case FETCH_SEARCH_WEATHER: return {
            ...state,
            searchWeatherObj: action.payload
        }
        case SEARCH_WEATHER_LOADING: return {
            ...state,
            isLoading: action.payload
        }
        case SEARCH_WEATHER_ERROR: return {
            ...state,
            isError: action.payload
        }
        case SEARCH_AIR_QUALITY: return {
            ...state,
            airQualityObj: action.payload
        }
        case SEARCH_FIVE_DAY_WEATHER: return {
            ...state,
            fiveDayWeather: action.payload
        }
        case SEARCH_DAY_SELECTED: return {
            ...state,
            daySelected: action.payload
        }
        case GET_SEARCH_DAY_SELECTED: return {
            ...state,
            selectedWeatherDay: action.payload
        }
        default:{
            return state
        }
    }
}

export default SearchWeatherReducer