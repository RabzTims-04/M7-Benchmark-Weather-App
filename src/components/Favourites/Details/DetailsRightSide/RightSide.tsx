import { Container, Row, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { CurrentDay } from '../../../../types/CurrentDayWeather'
import { ReduxStore } from '../../../../types/ReduxStore'
import RightCard from './RightCard'
import './RightSide.css'

interface LeftSideProps{
    currentDayProps:{
        weatherObj: CurrentDay | null
    }
}

const RightSide = ({currentDayProps}:LeftSideProps) => {

    const { user } = useSelector((state:ReduxStore) => state.login)

    return (
        <Container>
            <Row className="pt-4 justify-content-end">
                <Image className="mb-2" style={{borderRadius:"50%", width:"55px", height:"30px"}} fluid src={
                    user
                    ? user?.avatar 
                    : "https://www.vabali.de/online/wp-content/uploads/blank-avatar-profile.png"
                    } alt="user avatar" />
            </Row>
            <Row className="mt-5">
                <RightCard/>
            </Row>
        </Container>
    )
}

export default RightSide
