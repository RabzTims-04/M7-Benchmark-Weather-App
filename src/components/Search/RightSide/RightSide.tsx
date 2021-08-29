import { Container, Row, Image } from 'react-bootstrap'
import RightCard from './RightCard'
import './RightSide.css'

const RightSide = () => {
    return (
        <Container>
            <Row className="py-4 justify-content-end">
                <Image style={{borderRadius:"50%", width:"55px", height:"30px"}} fluid src="https://lh3.googleusercontent.com/ogw/ADea4I6AgO6vlMx5bVpMSaF6eSjZ4cdtbHSEyma2ycvcHQ=s192-c-mo" alt="user avatar" />
            </Row>
            <Row className="pt-3">
                <RightCard/>
            </Row>
        </Container>
    )
}

export default RightSide
