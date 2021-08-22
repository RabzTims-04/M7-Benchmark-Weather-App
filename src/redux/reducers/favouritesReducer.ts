import { initialState } from "../store/store";
import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions/actionTypes";
import { AnyAction } from "redux";

const favouritesReducer = (state = initialState.favourites, action:AnyAction) => {

    switch(action.type){
        case ADD_TO_FAVOURITES:
            let locationInFavourites = state.locations.find((c) => c.id === action.payload.id) 
            let newLocations = [...state.locations]
            if(newLocations.includes(locationInFavourites!)){
                alert('already in favourites')
            }else{
                newLocations.push(action.payload)
            }
        return {
            ...state,
            locations: newLocations
        }
        case REMOVE_FROM_FAVOURITES: return{
            ...state,
            locations: state.locations.filter(l => l.id !== action.payload.id)
        }
        default: {
            return state
        }
    }
}

export default favouritesReducer