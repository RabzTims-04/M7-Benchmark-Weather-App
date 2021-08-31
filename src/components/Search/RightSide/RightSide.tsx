import { Container, Row, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ReduxStore } from '../../../types/ReduxStore'
import RightCard from './RightCard'
import './RightSide.css'

const RightSide = () => {

    const { user } = useSelector((state:ReduxStore) => state.login)
    return (
        <Container>
            <Row className="pt-4 justify-content-end">
                <Image className="mb-4" style={{borderRadius:"50%", width:"55px", height:"30px"}} fluid src={
                    user
                    ? user?.avatar 
                    : "https://www.vabali.de/online/wp-content/uploads/blank-avatar-profile.png"
                    }  alt="user avatar" />
            </Row>
            <Row className="pt-3">
                <RightCard/>
            </Row>
        </Container>
    )
}

export default RightSide
