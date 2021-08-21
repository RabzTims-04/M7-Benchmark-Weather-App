import { initialState } from "../store/store";
import { DAY_SELECTED } from "../actions/actionTypes";
import { AnyAction } from "redux";

const SelectedDayReducer = (state= initialState.daySelected, action: AnyAction) => {
    switch(action.type){
        case DAY_SELECTED: return {
            ...state,
            isSelected: action.payload
        }
        default:{
            return state
        }
    }
}

export default SelectedDayReducer