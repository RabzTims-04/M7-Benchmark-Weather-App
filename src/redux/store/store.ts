import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { ReduxStore } from "../../types/ReduxStore"
import AirQualityReducer from "../reducers/AirQualityReducer"
import CurrentDayWeatherReducer from "../reducers/CurrentDayWeatherReducer"
import favouritesReducer from "../reducers/favouritesReducer"
import fiveDayWeatherReducer from "../reducers/fiveDayWeatherReducer"
import SearchWeatherReducer from "../reducers/SearchWeatherReducer"
import SelectedDayReducer from "../reducers/SelectedDayReducer"

const composeEnhancers =(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState:ReduxStore = {
    fiveDayWeather:{
        weatherArray:[],
        selectedWeather:null,
        timeArray:[],
        temperatureArray:[]
    },
    daySelected:{
        isSelected:false
    },
    currentDay:{
        weatherObj:null
    },
    airQuality:{
        airQualityObj:null
    },
    searchWeather:{
        searchWeatherObj:null,
        isLoading: false,
        isError:false,
        airQualityObj:null,
        fiveDayWeather: null,
        selectedWeatherDay: null,
        daySelected: false
    },
    favourites:{
        locations:[]
    }
}

const mainReducer = combineReducers({
    fiveDayWeather: fiveDayWeatherReducer,
    currentDay: CurrentDayWeatherReducer,
    daySelected: SelectedDayReducer,
    airQuality: AirQualityReducer,
    searchWeather: SearchWeatherReducer,
    favourites: favouritesReducer
})

export const configureStore = createStore(
    mainReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)