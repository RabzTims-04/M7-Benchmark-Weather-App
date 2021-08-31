import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { ReduxStore } from "../../types/ReduxStore"
import AirQualityReducer from "../reducers/AirQualityReducer"
import CurrentDayWeatherReducer from "../reducers/CurrentDayWeatherReducer"
import favouritesReducer from "../reducers/favouritesReducer"
import fiveDayWeatherReducer from "../reducers/fiveDayWeatherReducer"
import SearchWeatherReducer from "../reducers/SearchWeatherReducer"
import SelectedDayReducer from "../reducers/SelectedDayReducer"
import storage from "redux-persist/lib/storage"
import sessionStorage from "redux-persist/lib/storage/session"
import { encryptTransform } from "redux-persist-transform-encrypt"
import { persistReducer, persistStore } from "redux-persist"
import UserReducer from "../reducers/UserReducer"

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
    },
    login:{
        isError: false,
        isLoading: false,
        user: null
    }
}
const authPersistConfig = {
    key:"login",
    storage:sessionStorage,
    whitelist:['user'],
    transforms:[
        encryptTransform({
            secretKey:process.env.REACT_APP_SUPER_SECRET as string
        })
    ]
}

const mainReducer = combineReducers({
    fiveDayWeather: fiveDayWeatherReducer,
    currentDay: CurrentDayWeatherReducer,
    daySelected: SelectedDayReducer,
    airQuality: AirQualityReducer,
    searchWeather: SearchWeatherReducer,
    favourites: favouritesReducer,
    login: persistReducer(authPersistConfig, UserReducer)
})

const persistConfig = {
    key:"root",
    storage:storage,
    whitelist:['favourites'],
    transforms:[
        encryptTransform({
            secretKey:process.env.REACT_APP_SUPER_SECRET as string
        })
    ]
}


const persistedReducer = persistReducer(persistConfig, mainReducer)

const configureStore = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

const persistor = persistStore(configureStore)

export { configureStore, persistor}