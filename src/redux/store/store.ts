import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { ReduxStore } from "../../types/ReduxStore"
import CurrentDayWeatherReducer from "../reducers/CurrentDayWeatherReducer"
import fiveDayWeatherReducer from "../reducers/fiveDayWeatherReducer"

const composeEnhancers =(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState:ReduxStore = {
    fiveDayWeather:{
        weatherArray:[]
    },
    currentDay:{
        weatherObj:null
    }
}

const mainReducer = combineReducers({
    fiveDayWeather: fiveDayWeatherReducer,
    currentDay: CurrentDayWeatherReducer
})

export const configureStore = createStore(
    mainReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)