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
                <Container>
                    <Row>
                        <Col sm={4}>
                            <div className='Logo'>
                                <img src={Logo} alt={'logo'} onClick={() => {
                                    this.props.showFindYourCar(this.state.whichButtonPressed)}}/>
                            </div>
                        </Col>

                        <Col sm={8}>
                            <nav>
                                <p className={'navigationText'}>Search</p>
                                <p className={'navigationText'}>Let the car work</p>
                                <p className={'navigationText'}>Terms of use</p>
                                <p onClick={() => {
                                    this.props.showSignUp(this.state.whichButtonPressed)
                                }}
                                   className={(this.props.whichButtonPressed === "login") ? 'hidden' : 'navigationText'}>Sign
                                    up</p>
                                <p onClick={() => {
                                    this.props.showLogin(this.state.whichButtonPressed)
                                }} className={'navigationText'}>Login</p>
                            </nav>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}

export default MainHeader;