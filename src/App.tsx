import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/Home/Home';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from "react-router-dom"
import Search from './components/Search/Search';
import Maps from './components/Maps/Maps';
import Favourites from './components/Favourites/Favourites';
import Details from './components/Favourites/Details';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {

  return (
    <BrowserRouter>
      <Container className="App" >
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path='/maps' component={Maps} />
        <Route exact path="/favourites" component={Favourites} />
        <Route exact path="/details/:name" component={Details} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
