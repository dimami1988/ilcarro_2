import React from "react";
import Logo from "../images/logo/LogoLight.svg";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";

class MainHeader extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         whichButtonPressed: "home"
    //     };
    // }


    render() {
        return (
            <div className={'HeaderBox'}>
                <Container fluid={true}>
                    <Row>
                        <Col sm={5}>
                            <div className='Logo'>
                                <Link to='/'>
                                    <img src={Logo} alt={'logo'}/>
                                </Link>
                            </div>
                        </Col>

                        <Col sm={7}>
                            <nav>
                                <div className={"navBox"}><p >
                                    <Link to='/searchUnReg' className={'navigationText'}>
                                        Search
                                    </Link>
                                </p></div>
                                <div className={"navBox"}><p className={'navigationText'}>

                                    Let the car work

                                </p></div>
                                <div className={"navBox"}><a href={"https://en.wikipedia.org/wiki/Carsharing"}><p
                                    className={'navigationText'}>

                                    Terms of use

                                </p></a></div>
                                <div className={"navBox"}><p>
                                    <Link to='/signup' className={(this.props.whichButtonPressed === "login") ? 'hidden' : 'navigationText'}>
                                        Sign up
                                    </Link>
                                </p>
                                </div>

                                <div className={"navBox"}><p>
                                    <Link to='/login' className={'navigationText'}>
                                        Login
                                    </Link>
                                </p></div>
                            </nav>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}

export default MainHeader;