import React, { Component, FormEvent, ChangeEvent } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link, RouteComponentProps } from 'react-router-dom';
import axios from "axios"
import "./Login.css"
import Cookies from 'universal-cookie/es6';

interface LoginState{
    login:{
        email:any
        password: any
    }
}

const cookies = new Cookies()

class Login extends Component<RouteComponentProps>{

    state:LoginState={
        login:{
            email:"",
            password:""
        }
    }

    inputChange = (e:ChangeEvent<HTMLInputElement>) => {

        let id = e.target.id
        this.setState({
            login:{
                ...this.state.login,
                [id]: e.target.value                
            }
        })
    }

    loginHandle = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch(`${process.env.REACT_APP_BE_URL}auth/login`,{
                method: "POST",
                credentials: 'same-origin',
                body: JSON.stringify(this.state.login),
                headers:{
                    "Content-type":"application/json",
                    'Accept':"application/json",
                    "Authorization": "Bearer " + cookies.get('accessToken')
                }
            })
            if(response.ok){
                this.setState({
                    login:{
                        email:"",
                        password:""
                    }
                })
                this.props.history.push("/")
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    render() {
        return (
            <Container className="login-container">
                <Row className="justify-content-center">
                    <Col md={{span:5, offset:3}} className="login-col">
                        <Form onSubmit={(e)=>this.loginHandle(e)} className="login-form">
                            <Form.Group className="mb-3 text-start">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                value={this.state.login.email}
                                onChange={this.inputChange}
                                id="email"
                                type="email" 
                                placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 text-start">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                value={this.state.login.password}
                                onChange={this.inputChange}
                                id="password"
                                type="password" 
                                placeholder="Password" />
                            </Form.Group>
                            <Button className="login-btn py-2 my-2" type="submit">
                                SignIn
                            </Button>
                        </Form>
                        <div className="text-muted pt-2">
                            <small className="text-muted my-2">
                                Don't have an account? <Link to="/register">SignUp</Link>
                            </small>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;