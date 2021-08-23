import "./favourites.css"
import { Container, Row, Col, Image, Card } from "react-bootstrap"
import MyNav from "../Home/MyNav/MyNav"
import logo from "../../assets/logo3.png"
import { useSelector } from "react-redux"
import { ReduxStore } from "../../types/ReduxStore"

const Favourites = () => {

    const { favourites } = useSelector((state:ReduxStore) => state)

    return (
        <Container id="home-body">
            <Image fluid className="main-logo" src={logo} alt="logo" />
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                        <MyNav/>                        
                    </Col>
                    <Col className="" xs={11} sm={11} md={11} lg={11} xl={11}>                         
                        <Container>
                            <Row>
                            <Col id="left-card-fav" md={4}>
                                {favourites?.locations.map( location =>                                 
                                    <Card  style={{ width: '18rem' }}>
                                    <Card.Body>
                                    <Card.Title>{location.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                    <Card.Text>                                        
                                    </Card.Text>
                                    <Card.Link href="#"></Card.Link>
                                    <Card.Link href="#"></Card.Link>
                                    </Card.Body>
                                </Card>
                                )}       
                            </Col>
                            </Row>
                        </Container>                                        
                    </Col>
                </Row>            
        </Container>
    )
}

export default Favourites
