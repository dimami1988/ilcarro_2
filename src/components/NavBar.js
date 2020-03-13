import Row from "react-bootstrap/Row";
import React from "react";



function NavBar (props) {

    return(
    <Row sm={6} className='NavigationTextBlockFooter2'>
        <p className='navigationText'>Search</p>
        <p className='navigationText'>Let the car work</p>
        <p className='navigationText'>Terms of use</p>
        <p className='navigationText'>Sign up</p>
        <p className='navigationText'>Log in</p>
    </Row>
    )
}

export default NavBar;