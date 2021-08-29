import { Container, Row, Col, Image } from 'react-bootstrap'
import LeftSide from './Details/DetailsLeftSide/LeftSide'
import MyNav from '../Home/MyNav/MyNav'
import RightSide from './Details/DetailsRightSide/RightSide'
import TopCarousal from './Details/DetailsTopCarousal/TopCarousal'
import logo from "../../assets/logo3.png"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { fetchCurrentDayWeatherAction, fetchFiveDayWeatherAction } from '../../redux/actions/action'
import { useParams } from 'react-router-dom'
import { ReduxStore } from '../../types/ReduxStore'

interface DetailsParams {
    name: string
}

const Details = () => {

    let { name }  = useParams<DetailsParams>()

    useEffect(() => {

        dispatch(fetchFiveDayWeatherAction(name))
        dispatch(fetchCurrentDayWeatherAction(name))
    },[name])

    const { fiveDayWeather, currentDay } = useSelector((state:ReduxStore) => state)
    const dispatch = useDispatch<ThunkDispatch<Action, any, any>>()
        
    return (
        <Container id="home-body">
            <Image fluid className="main-logo" src={logo} alt="logo" />
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                        <MyNav/>                        
                    </Col>
                    <Col xs={11} sm={11} md={11} lg={7} xl={8}>
                        <Row className="py-5 carousal-row">
                            <TopCarousal fiveDayWeatherProps={fiveDayWeather} currentDayProps={currentDay}/>
                        </Row>
                        <Row>
                            <LeftSide currentDayProps={currentDay}/>
                        </Row>
                    </Col>
                    <Col xs={11} sm={11} md={11} lg={4} xl={3}>
                        <RightSide currentDayProps={currentDay}/>
                    </Col>
                </Row>            
        </Container>
    )
}

export default Details
