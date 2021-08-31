import { ChangeEvent, useState } from 'react'
import { Container, Row, Image, Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { fetchUserAction, logoutUserAction } from '../../../redux/actions/action'
import { ReduxStore } from '../../../types/ReduxStore'
import RightCard from './RightCard'
import './RightSide.css'

const RightSide = () => {

    const [userImg, setUserImg] = useState<any>({image:null})
    const [show, setShow] = useState<boolean>(false)

    const { user } = useSelector((state:ReduxStore) => state.login)
    const dispatch = useDispatch<ThunkDispatch<Action, any, any>>()

    const logout = () => {
        dispatch(logoutUserAction())     
        /* removeCookie('refreshToken') */
    }

    const profileImage = async (e:any) => {
        try {
            const formData = new FormData()
            formData.set('avatar', userImg.image)
            e.preventDefault()
            const imgresponse = await fetch(`${process.env.REACT_APP_BE_URL}users/me/cover`,{
                credentials:'include',
                method: 'POST',
                body: formData
            })
            const data = await imgresponse.json()
            if(imgresponse.ok){
                dispatch(fetchUserAction())
                console.log("imgdata",data);
                setUserImg({})                       
            }
        } catch (error) {
            console.log(error);
            
        }
    }

   const handleClose = () => {
        setShow(false)
      };
    
     const handleShow = () => {
        setShow(true);
      };

   
    return (
        <Container>
            <Row className="pt-4 justify-content-end">
             <div className="d-flex justify-content-between">
                {
                !user ?
                    <Link style={{fontSize:"x-large"}} to="/login"><small>Log In</small></Link>
                :<>
                    <Link to="/" onClick={() => logout()} ><small style={{fontSize:"large"}}>Logout</small></Link>
                </>
                }
                    
                    <Image
                        className="mb-2"
                        onClick={handleShow} 
                        style={{borderRadius:"50%", width:"60px", height:"60px"}} 
                        fluid 
                        src={
                            user
                            ? user?.avatar 
                            : "https://www.vabali.de/online/wp-content/uploads/blank-avatar-profile.png"
                            } 
                        alt="user avatar" 
                        />
                </div> 
                {user ?
                
                         <Modal id="profileModal" 
                            show={show}
                            onHide={handleClose}
                            >                                
                            <Modal.Header closeButton onClick={handleClose}>
                                <Modal.Title>Profile Photo</Modal.Title>
                            </Modal.Header>

                                    <Modal.Body className="text-center">

                                    <img className="modalProfilePic img-fluid"  
                                    src={
                                            user
                                            ? user?.avatar 
                                            : "https://www.vabali.de/online/wp-content/uploads/blank-avatar-profile.png"
                                            } alt="profile-pic"/>
                                        
                                        </Modal.Body>
                                        <Modal.Footer className="d-flex px-4 pt-0 flex-row justify-content-between">
                                        <div className="d-flex text-center">
                                            <Button variant="secondary" className="text-center d-flex flex-column pr-5">
                                            <div className="hoverBtn">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                                            </svg>
                                            </div>
                                            <div>
                                                Edit
                                            </div>
                                            </Button>

                                            <Button className=" d-flex flex-column pr-5 mx-5" variant="secondary">
                                            <div className="hoverBtn">
                                            <label className="p-0 d-flex mt-0 mr-0 mb-0 mx-3" htmlFor ="postimg">
                                        
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                                <path d="M16 13a4 4 0 11-4-4 4 4 0 014 4zm6-4v11H2V9a3 3 0 013-3h1.3l1.2-3h9l1.2 3H19a3 3 0 013 3zm-5 4a5 5 0 10-5 5 5 5 0 005-5z"></path>
                                                </svg>
                                            
                                            </label>
                                                <input 
                                                    style={{display:'none'}}
                                                    type="file"
                                                    title="choose"
                                                    id="postimg"
                                                    onChange={(e:any) => {
                                                        setUserImg({
                                                            image: (e && e.target) && e!.target!.files[0]!
                                                        })
                                                        console.log(e.target.files[0])
                                                    }}                            
                                                    />

                                            </div>
                                            <div>
                                                Upload
                                            </div>
                                            </Button>

                                            <Button onClick={(e:any) => profileImage(e)} variant="secondary" className="d-flex flex-column pr-5">
                                                <div className="hoverBtn mx-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match ml-4" width="24" height="24" focusable="false">
                                                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                                            </svg>
                                                </div>
                                                <div>
                                                Save changes
                                                </div>
                                            </Button>
                                            </div>
                                    
                                            <div className="d-flex text-center">
                                            <Button variant="secondary" className="text-center d-flex flex-column">
                                            <div className="hoverBtn">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match ml-2" width="24" height="24" focusable="false">
                                                <path d="M20 4v1H4V4a1 1 0 011-1h4a1 1 0 011-1h4a1 1 0 011 1h4a1 1 0 011 1zM5 6h14v13a3 3 0 01-3 3H8a3 3 0 01-3-3zm9 12h1V8h-1zm-5 0h1V8H9z"></path>
                                            </svg>
                                            </div>
                                            <div>
                                                Delete
                                            </div>
                                            </Button>
                                            </div>
                                    
                                        </Modal.Footer>
                                </Modal> 
                                : <></>
                                }                                  
                                </Row>
            <Row className="pt- mt-5">
                <RightCard/>
            </Row>
        </Container>
    )
}

export default RightSide
