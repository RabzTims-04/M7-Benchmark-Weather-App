import { Container, Row } from 'react-bootstrap'
import LeftCardTop from './LeftCardTop'
import LeftCardBottom from './LeftCardBottom'
import './LeftSide.css'
import { CurrentDay } from '../../../../types/CurrentDayWeather'
import { AiOutlineHeart } from "react-icons/ai" 
import { FcLike } from "react-icons/fc"
import { useDispatch, useSelector } from 'react-redux'
import { ReduxStore } from '../../../../types/ReduxStore'
import { addToFavouritesAction, removeFromFavouritesAction } from '../../../../redux/actions/action'
import { MouseEvent } from 'react'

interface LeftSideProps{
    currentDayProps:{
        weatherObj: CurrentDay | null
    }
}

const LeftSide = ({currentDayProps}:LeftSideProps) => {

    const { searchWeather, favourites } = useSelector((state:ReduxStore) => state)
    const { searchWeatherObj } = searchWeather
    const { locations } = favourites
    const dispatch = useDispatch()

    return (
        <Container>
            <div className="d-flex justify-content-between">
            <h4 className="text-start">Today's Highlights</h4>
            {                
            locations.find(location => location.id === currentDayProps.weatherObj?.id) 
            ? <div 
            onClick={(e:MouseEvent<HTMLElement>)=>dispatch(removeFromFavouritesAction(currentDayProps.weatherObj!))}
            className="text-end fav-search-btn">
                <FcLike/>
            </div>
           : <div 
            onClick={(e:MouseEvent<HTMLElement>)=>dispatch(addToFavouritesAction(currentDayProps.weatherObj!))}
            className="text-end fav-search-btn">
               <AiOutlineHeart/> 
            </div>
            }
            </div>
            <Row className="pt-3">
                <LeftCardTop/> 
            </Row>
            <Row className="py-4">
                <LeftCardBottom/>
            </Row>
        </Container>
    )
}

export default LeftSide
