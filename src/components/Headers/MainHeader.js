import React from "react";
import Logo from "../../images/logo/LogoLight.svg";
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
                                <Link to='/' style={{textDecoration: 'none'}}>
                                    <img src={Logo} alt={'logo'}/>
                                </Link>
                            </div>
                        </Col>

                        <Col sm={7}>
                            <nav>
                                <div className={"navBox"}><p>
                                    <Link to='/search' className={'navigationText'} style={{textDecoration: 'none'}}>
                                        Search
                                    </Link>
                                </p></div>

                                <div className={"navBox"}>
                                    <p>
                                        <Link to={'/letyourcarwork'} className={'navigationText'}
                                              style={{textDecoration: 'none'}}>
                                            Let the car work
                                        </Link>
                                    </p>
                                </div>

                                <div className={"navBox"}><a href={"https://en.wikipedia.org/wiki/Carsharing"}><p
                                    className={'navigationText'} style={{textDecoration: 'none'}}>

                                    Terms of use

                                </p></a></div>
                                <div className={"navBox"}><p>
                                    <Link to='/signup'
                                          className={(this.props.whichButtonPressed === "login") ? 'hidden' : 'navigationText'}
                                          style={{textDecoration: 'none'}}>
                                        Sign up
                                    </Link>
                                </p>
                                </div>

                                <div className={"navBox"}><p>
                                    <Link to='/login' className={'navigationText'} style={{textDecoration: 'none'}}>
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