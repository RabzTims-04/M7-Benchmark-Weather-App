import "./favourites.css"
import { Container, Row, Col, Image, Card } from "react-bootstrap"
import MyNav from "../Home/MyNav/MyNav"
import logo from "../../assets/logo3.png"
import { useDispatch, useSelector } from "react-redux"
import { ReduxStore } from "../../types/ReduxStore"
import { useEffect } from "react"
import {  removeFromFavouritesAction } from '../../redux/actions/action'
import { MouseEvent } from 'react'
import { FcLike } from "react-icons/fc"
import { ThunkDispatch } from "redux-thunk"
import { Action } from "redux"
import { Link } from "react-router-dom"

const Favourites = () => {

    
    const { favourites, searchWeather } = useSelector((state:ReduxStore) => state)
    const { searchWeatherObj } = searchWeather
    const { locations } = favourites
    const dispatch = useDispatch<ThunkDispatch<Action, any, any>>()
    
    useEffect(() => {
        console.log("favourites page",favourites);
        
    },[favourites])

    return (
        <Container id="home-body">
            <Image fluid className="main-logo" src={logo} alt="logo" />
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                        <MyNav/>                        
                    </Col>
                    <Col className="" >
                            {locations.length
                            ?<Container className="py-5">
                            <Row className="" >
                                {locations.map( (location, i) =>                                 
                                <Col key={i} sm={6} md={4} lg={3} xl={3} id="left-card-fav" className="mb-5">
                                    <Card style={{ width: '12rem', height:"12rem" }}>
                                        <Card.Body>
                                            <div onClick={(e:MouseEvent<HTMLElement>)=>
                                                dispatch(removeFromFavouritesAction(location))} style={{position:"absolute"}}>
                                                <FcLike/>
                                            </div>
                                         <Card.Title>{location.name}, {location.sys.country}</Card.Title>
                                         <Card.Title>{location.main.temp}°C</Card.Title>
                                         <Image src={`http://openweathermap.org/img/wn/${location.weather[0].icon}.png`} />
                                         <Link style={{textDecoration:"none"}} to={`/details/${location.name}`}>
                                            <Card.Text >
                                                {location.weather[0].description}
                                            </Card.Text>
                                         </Link>
                                         
                                        </Card.Body>
                                    </Card>
                                </Col>
                                )}    
                            </Row>  
                        </Container>
                            :<h5 style={{paddingTop:"10rem"}}>Search for new places and add them to your favourites</h5>
                        }                                                      
                    </Col>
                </Row>            
        </Container>
    )
}

export default Favourites
