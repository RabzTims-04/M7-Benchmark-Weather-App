import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { AiOutlineHome, AiOutlineSetting, AiOutlineBell } from "react-icons/ai"
import { BiBookHeart, BiSearchAlt } from "react-icons/bi"
import { HiOutlinePhotograph } from "react-icons/hi"
import './MyNav.css'

const MyNav = () => {
    return (
        <div className="nav-body">
        <div className="left">
            <ul className="nav">
                <li>
                    <Link to="/">
                        <Button>
                            <AiOutlineHome className="nav-icons"/>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/search">
                        <Button>
                            <BiSearchAlt/>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/favourites">
                        <Button>
                            <BiBookHeart/>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/notifications">
                        <Button>
                            <AiOutlineBell/>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/maps">
                        <Button>
                            <HiOutlinePhotograph/>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <Button>
                            <AiOutlineSetting/>
                        </Button>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default withRouter(MyNav)
