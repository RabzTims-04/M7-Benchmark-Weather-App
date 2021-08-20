import React, { useEffect } from 'react'
import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { fetchFiveDayWeatherAction } from '../../../redux/actions/action'
import CarousalCard from './CarousalCard'
import "./TopCarousal.css"

const mapDispatchToProps = (dispatch:ThunkDispatch<Action, any, any>) => ({
    getWeatherArray : (city: string)=> dispatch(fetchFiveDayWeatherAction(city))
})

interface TopCarousalProps extends RouteComponentProps{
    getWeatherArray: (city: string) => void
}

const TopCarousal = ({getWeatherArray}:TopCarousalProps) => {

    useEffect(() => {
     getWeatherArray("saarbrücken")
    },[])

    return (
        <>
        <Carousel id="top-carousal" wrap={false} variant="dark" indicators={false} >           
            <Carousel.Item className="infinite-row">
              <CarousalCard />
            </Carousel.Item>
        </Carousel>
    </>
    )
}

export default connect(s=>s,mapDispatchToProps)(withRouter(TopCarousal))
