import React from "react";
import Logo from "../images/logo/LogoLight.svg";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class MainHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            whichButtonPressed: "home"

        };
    }


    render() {
        return (
            <div className={'HeaderBox'}>
                <Container fluid={true}>
                    <Row>
                        <Col sm={5}>
                            <div className='Logo' onClick={() => {
                                this.props.showFindYourCar(this.state.whichButtonPressed)
                            }}>
                                <img src={Logo} alt={'logo'} />
                            </div>
                        </Col>

                        <Col sm={7}>
                            <nav>
                                <div className={"navBox"}><p className={'navigationText'} onClick={() => {
                                    this.props.showSearchWithoutRegistration(this.state.whichButtonPressed)
                                }}>Search</p></div>
                                <div className={"navBox"}><p className={'navigationText'}>Let the car work</p></div>
                                <div className={"navBox"}><a href={"https://en.wikipedia.org/wiki/Carsharing"}><p className={'navigationText'}>
                                     Terms of use</p></a></div>
                                <div className={"navBox"}><p onClick={() => {
                                    this.props.showSignUp(this.state.whichButtonPressed)
                                }}
                                                             className={(this.props.whichButtonPressed === "login") ? 'hidden' : 'navigationText'}>Sign
                                    up</p></div>
                                <div className={"navBox"}><p onClick={() => {
                                    this.props.showLogin(this.state.whichButtonPressed)
                                }} className={'navigationText'}>Login</p></div>
                            </nav>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}

export default MainHeader;