import { Container, Row } from 'react-bootstrap'
import LeftCardTop from './LeftCardTop'
import LeftCardBottom from './LeftCardBottom'
import { Link } from 'react-router-dom'
import './LeftSide.css'

const LeftSide = () => {
    return (
        <Container>
            <div className="d-flex justify-content-between">
                <h4 className="text-start">Today's Highlights</h4>
                <Link style={{textDecoration:"none"}} to="/login"><small>Log In</small></Link>
            </div>
            <Row className="pt-3">
                <LeftCardTop/> 
            </Row>
            <Row className="py-4">
                <LeftCardBottom/>
            </Row>
        </Container>
    )
}

export default LeftSide
