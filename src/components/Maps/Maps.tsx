import { Container, Image, Row, Col } from 'react-bootstrap'
import MyNav from "../Home/MyNav/MyNav"
import logo from "../../assets/logo3.png"
import './Maps.css'
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
import GoogleMapReact from "google-map-react"

const Maps = ({google}:any) => {

    const defaultProps = {
        center:{
            lat:10.99835602,
            lng:77.01502627,
        },
        zoom:11
    }

    return (
        <Container id="home-body">
            <Image fluid className="main-logo" src={logo} alt="logo" />
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                        <MyNav/>                        
                    </Col>
                    <Col xs={11} sm={11} md={11} lg={11} xl={11}>
                   {/*  <div style={{ height: '100vh', width: '100%' }}> */}
                       {/*  <GoogleMapReact
                            bootstrapURLKeys={{ key: "" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                            />
                        </GoogleMapReact> */}
                       {/*  <Map google={google} /> */}
                       {/*  </div> */}
                    </Col>
                </Row>            
        </Container>
    )
}

export default Maps
