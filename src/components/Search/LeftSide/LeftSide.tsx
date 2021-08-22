import { Container, Row, Button } from 'react-bootstrap'
import LeftCardTop from './LeftCardTop'
import LeftCardBottom from './LeftCardBottom'
import './LeftSide.css'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { addToFavouritesAction, fetchSearchWeatherAction } from '../../../redux/actions/action'
import { MouseEvent } from 'react'
import { ReduxStore } from '../../../types/ReduxStore'

const LeftSide = () => {

    const { searchWeather } = useSelector((state:ReduxStore) => state)
    const { searchWeatherObj } = searchWeather
    const dispatch = useDispatch<ThunkDispatch<Action, any, any>>()

    return (
        <Container>
            <div className="d-flex justify-content-between">
            <h4 className="text-start">Today's Highlights</h4>
            <Button 
            onClick={(e:MouseEvent<HTMLElement>)=>dispatch(addToFavouritesAction(searchWeatherObj!))}
            className="text-end search-btn">Add to favourites</Button>
             <Button 
            onClick={(e:MouseEvent<HTMLElement>)=>dispatch(fetchSearchWeatherAction(""))}
            className="text-end search-btn">New search</Button>
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
