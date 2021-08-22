import { initialState } from "../store/store";
import { FETCH_CURRENT_DAY_WEATHER } from "../actions/actionTypes";
import { AnyAction } from "redux";

const CurrentDayWeatherReducer = (state= initialState.currentDay, action:AnyAction) => {
    switch(action.type){
        case FETCH_CURRENT_DAY_WEATHER: return {
            ...state,
            weatherObj: action.payload
        }
        default:{
            return state
        }
    }
}

export default CurrentDayWeatherReducer