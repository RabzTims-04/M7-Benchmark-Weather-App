import { Container, Row, Button } from 'react-bootstrap'
import LeftCardTop from './LeftCardTop'
import LeftCardBottom from './LeftCardBottom'
import './LeftSide.css'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { addToFavouritesAction, fetchSearchWeatherAction, removeFromFavouritesAction } from '../../../redux/actions/action'
import { MouseEvent } from 'react'
import { ReduxStore } from '../../../types/ReduxStore'
import { AiOutlineHeart } from "react-icons/ai" 
import { FcLike } from "react-icons/fc"

const LeftSide = () => {

    const { searchWeather, favourites } = useSelector((state:ReduxStore) => state)
    const { searchWeatherObj } = searchWeather
    const { locations } = favourites
    const dispatch = useDispatch<ThunkDispatch<Action, any, any>>()

    return (
        <Container>
            <div className="d-flex justify-content-between">
            <h4 className="text-start">Today's Highlights</h4>
            {                
            locations.find(location => location.id === searchWeatherObj?.id) 
            ? <div 
            onClick={(e:MouseEvent<HTMLElement>)=>dispatch(removeFromFavouritesAction(searchWeatherObj!))}
            className="text-end fav-search-btn">
                <FcLike/>
            </div>
           : <div 
            onClick={(e:MouseEvent<HTMLElement>)=>dispatch(addToFavouritesAction(searchWeatherObj!))}
            className="text-end fav-search-btn">
               <AiOutlineHeart/> 
            </div>
            }
             <Button 
            onClick={(e:MouseEvent<HTMLElement>)=>dispatch(fetchSearchWeatherAction(""))}
            className="text-end search-btn">New search</Button>
            </div>
            <Row className="pt-3">
                <LeftCardTop/> 
            </Row>
            <Row className=" mt-4 pt-4">
                <LeftCardBottom/>
            </Row>
        </Container>
    )
}

export default LeftSide
