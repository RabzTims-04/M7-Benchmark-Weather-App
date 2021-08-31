import { initialState } from "../store/store";
import { FETCH_USER, LOGOUT_USER } from "../actions/actionTypes";
import { AnyAction } from "redux";

const UserReducer = (state= initialState.login, action: AnyAction) => {
    switch(action.type){
        case FETCH_USER: return {
            ...state,
            user: action.payload
        }
        case LOGOUT_USER: return {
            ...state,
            user: null
        }
        default:{
            return state
        }
    }
}

export default UserReducer