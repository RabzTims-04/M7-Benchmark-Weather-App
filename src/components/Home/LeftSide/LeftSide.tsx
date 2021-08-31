import { Button, Container, Row } from 'react-bootstrap'
import LeftCardTop from './LeftCardTop'
import LeftCardBottom from './LeftCardBottom'
import { Link } from 'react-router-dom'
import './LeftSide.css'
import { useDispatch, useSelector } from 'react-redux'
import { ReduxStore } from '../../../types/ReduxStore'
import { useCookies } from "react-cookie"
import { Dispatch } from 'redux'
import { logoutUserAction } from '../../../redux/actions/action'

const LeftSide = () => {

    const { user } = useSelector((state:ReduxStore) => state.login)
    const dispatch = useDispatch<Dispatch>()
    /* const [cookies, setCookie, removeCookie] = useCookies(['refreshToken']); */

    const logout = () => {
        dispatch(logoutUserAction())     
        /* removeCookie('refreshToken') */
    }

    return (
        <Container>
            <div className="d-flex justify-content-between">
                <h4 className="text-start">Today's Highlights</h4>
                {
                !user ?
                    <p></p>
                :<>
                    <small>Welcome <span style={{color:"blue"}}>{user.name} {user.surname}</span></small>
                </>
                }
            </div>
            <Row className="pt-3">
                <LeftCardTop/> 
            </Row>
            <Row className=" mt-4 pt-4">
                <LeftCardBottom/>
            </Row>
        </Container>
    )
}

export default LeftSide
