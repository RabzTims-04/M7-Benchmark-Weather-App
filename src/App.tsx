import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/Home/Home';
import { Container, Image } from 'react-bootstrap';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Container className="App" >
        <Home/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
