import React from 'react'
import { Container, Row, Col, Image, Form, FormControl, Spinner } from 'react-bootstrap'
import MyNav from '../Home/MyNav/MyNav'
import TopCarousal from './TopCarousal/TopCarousal'
import "./Search.css"
import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'
import logo from "../../assets/logo3.png"
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReduxStore } from '../../types/ReduxStore'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { fetchSearchWeatherAction } from '../../redux/actions/action'

const Search = () => {

    const [search, setSearch] = useState('')

    const { searchWeather } = useSelector((state:ReduxStore) => state)
    const dispatch = useDispatch<ThunkDispatch<Action, any, any>>()

    return (
        <Container className={searchWeather.searchWeatherObj === null ?'search-column' : 'none'}  id="home-body">
            <Image fluid className="main-logo" src={logo} alt="logo" />

                <Row >
                    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                       <MyNav/>                       
                    </Col>
                    {searchWeather.searchWeatherObj === null ?

                    <Col xs={11} sm={11} md={11} lg={11} xl={11}>  
                        <Container style={{padding:"10rem"}}>
                            <Row className="justify-content-center">
                                <Col className="text-center">
                                    {searchWeather.isLoading ?
                                     <>
                                     <Spinner animation="grow" size="sm" />
                                     <Spinner animation="grow" />
                                     </>
                                    :<Form className="">
                                        <FormControl
                                            onKeyDown={(e:KeyboardEvent<HTMLInputElement>)=>dispatch(fetchSearchWeatherAction(search, e))}
                                            id="custom-form"
                                            value={search}
                                            onChange={(e:ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)}	
                                            type="text" 
                                            placeholder="Search" 
                                            className=" mt-3" />
                                    </Form>
                                    }
                                </Col>
                            </Row>
                        </Container>                                  
                    </Col>

                   : <>
                   <Col xs={11} sm={11} md={11} lg={7} xl={8}>
                        <Row className="py-5 carousal-row">
                           <TopCarousal/>
                        </Row>
                        <Row>
                            <LeftSide/> 
                        </Row>
                    </Col>
                    <Col xs={11} sm={11} md={11} lg={4} xl={3}>
                         <RightSide/> 
                    </Col> 
                    </>
                }
                </Row>            
        </Container>
    )
}

export default Search
