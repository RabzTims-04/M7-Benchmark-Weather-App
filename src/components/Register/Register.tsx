import React, { Component, FormEvent, ChangeEvent } from 'react';
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap"
import { Link, RouteComponentProps } from 'react-router-dom';
import Cookies from "universal-cookie"
import "./Register.css"
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { fetchUserAction } from '../../redux/actions/action';
import { ReduxStore } from '../../types/ReduxStore';
import logo from "../../assets/logo3.png"

const mapStateToProps = (state:ReduxStore) => state

const mapDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
    fetchUser : () => dispatch(fetchUserAction())
})

interface RegisterProps extends RouteComponentProps{
    fetchUser: () => void
}

interface RegisterState{
    register:{
        name: string
        surname: string
        email:string
        password: any
    }
}

/* const cookies = new Cookies() */

class Register extends Component<RegisterProps, RegisterState> {

    state:RegisterState = {
        register:{
            name:"",
            surname:"",
            email:"",
            password:""
        }
    }

    inputChange = (e:ChangeEvent<HTMLInputElement>) => {

        let id = e.target.id
        this.setState({
            register:{
                ...this.state.register,
                [id]: e.target.value                
            }
        })
    }

    registerHandle = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch(`${process.env.REACT_APP_BE_URL}auth/register`,{
                method: "POST",
                credentials: 'include',
                body: JSON.stringify(this.state.register),
                headers:{
                    "Content-type":"application/json",
                    'Accept':"application/json",
                }
            })
            console.log(response);            
            if(response.ok){
                this.props.fetchUser()
                this.setState({
                    register:{
                        name:"",
                        surname:"",
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
            <Container className="register-container">
                <Link to="/">
                    <Image fluid className="login-main-logo" src={logo} alt="logo" />
                </Link>
                <Row className="justify-content-center">
                    <Col md={{span:5, offset:3}} className="register-col">
                        <Form 
                        onSubmit={this.registerHandle} 
                        className="register-form"
                        >
                            <Row className="mb-3">
                                <Form.Group as={Col} className="text-start" >
                                <small>FirstName</small>
                                <Form.Control 
                                id="name"
                                value={this.state.register.name}
                                onChange={this.inputChange}
                                type="text" 
                                placeholder="Name" />
                                </Form.Group>

                                <Form.Group as={Col} className="text-start" >
                                <small>LastName</small>
                                <Form.Control 
                                id="surname"
                                value={this.state.register.surname}
                                onChange={this.inputChange}
                                type="text" 
                                placeholder="Surname" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3 text-start" >
                                <small>Email</small>
                                <Form.Control 
                                id="email"
                                value={this.state.register.email}
                                onChange={this.inputChange}
                                type="email" 
                                placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 text-start" >
                                <small>Password</small>
                                <Form.Control 
                                id="password"
                                value={this.state.register.password}
                                onChange={this.inputChange}
                                type="password" 
                                placeholder="Enter password" />
                            </Form.Group>
{/*                             <Form.Group  className="mb-3 text-start">
                                <small>Upload avatar</small>
                                <Form.Control 
                                id="avatar"
                                onChange={(e:ChangeEvent<HTMLInputElement>) => {
                                     this.setState({
                                        ...this.state,
                                        image: e.target.files[0]
                                    }) 
                                   console.log( e.target.files[0]!);
                                    
                                }}
                                type="file" />
                            </Form.Group> */}
                            <Button className="register-btn py-2 my-2" type="submit">
                                SignUp
                            </Button>
                        </Form>
                        <div className="text-muted pt-2">
                            <small className="text-muted my-2">
                                Already have an account? <Link to="/login">SignIn</Link>
                            </small>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);