import { Container, Image, Row, Col } from 'react-bootstrap'
import MyNav from "../Home/MyNav/MyNav"
import logo from "../../assets/logo3.png"
import './Maps.css'

const Maps = () => {
    return (
        <Container id="home-body">
            <Image fluid className="main-logo" src={logo} alt="logo" />
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                        <MyNav/>                        
                    </Col>
                    <Col xs={11} sm={11} md={11} lg={7} xl={8}>
                        <Row className="py-5 carousal-row">

                        </Row>
                        <Row>

                        </Row>
                    </Col>
                    <Col xs={11} sm={11} md={11} lg={4} xl={3}>

                    </Col>
                </Row>            
        </Container>
    )
}

export default Maps
