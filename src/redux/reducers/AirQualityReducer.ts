import { initialState } from "../store/store";
import { FETCH_AIR_QUALITY } from "../actions/actionTypes";
import { AnyAction } from "redux";

const AirQualityReducer = (state= initialState.airQuality, action: AnyAction) => {
    switch(action.type){
        case FETCH_AIR_QUALITY: return {
            ...state,
            airQualityObj: action.payload
        }
        default:{
            return state
        }
    }
}

export default AirQualityReducer