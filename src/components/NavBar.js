import Row from "react-bootstrap/Row";
import React from "react";
import {Link} from "react-router-dom";



function NavBar (props) {

    return(
    <Row sm={6} className='NavigationTextBlockFooter2'>

        <li className='navigationText'>
            <Link to='/search'>
            Search
            </Link>
        </li>

        <li className='navigationText'>
            <Link to='/letTheCarWork'>
            Let the car work
            </Link>
        </li>

        <li className='navigationText'>
            <Link to='/terms'>
            Terms of use
            </Link>
        </li>

        <li className='navigationText'>
            <Link to='/signUp'>
            Sign up
            </Link>
        </li>

        <li className='navigationText'>
            <Link to='/login'>
            Log in
            </Link>
        </li>

    </Row>
    )
}

export default NavBar;