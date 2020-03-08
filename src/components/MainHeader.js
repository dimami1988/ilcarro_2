import React from "react";
import Logo from "../images/logo/LogoLight.svg";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class MainHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowSignUp: false,
            isShowLogin: false
        };
    }


    render() {
        return (
            <div className={'HeaderBox'}>
                <Container>
                    <Row>
                        <Col sm={6} >
                            <img src={Logo} alt={'logo'}/>
                        </Col>

                        <Col sm={6}>
                            <nav>
                                <p className={'navigationText'}>Search</p>
                                <p className={'navigationText'}>Let the car work</p>
                                <p className={'navigationText'}>Terms of use</p>
                                <p onClick={() => {
                                    this.props.showSignUp(this.state.isShowSignUp)
                                }} className={this.props.isShowSignUp ? 'hidden' : 'navigationText'}>Sign up</p>
                                <p onClick={() => {
                                    this.props.showLogin(this.state.isShowLogin)
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