import React from "react";
import Logo from "../images/logo/component.png";
import Facebook from "../images/socialNets/facebookWhite.png";
import Telegram from "../images/socialNets/telegramWhite.png";
import VK from "../images/socialNets/vkWhite.png";
import Instagram from "../images/socialNets/instagramWhite.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Section2Footer() {

    return (

        <Container fluid={'true'} className="footer2">
            <Row sm={12} className="footer2_beginning">
                <Col sm={4} className="footer2_text1">
                    <p>Candy canes topping dessert jelly beans pie jelly beans sweet roll.
                        Toffee cotton candy cake chocolate cake.
                        Bonbon gummi bears jelly-o bonbon fruitcake tootsie roll cake
                        cookie gingerbread. Icing wafer pie pudding ice cream bonbon halvah
                        bonbon topping. Donut halvah tiramisu bear claw tart.
                    </p>
                </Col>
                <Col sm={4} className="logo">
                    <img src={Logo} alt="logo"/>
                </Col>
                <Col sm={4} className="socialNetBlock">
                    <div className="socialNets"><img className="socialNetsPic" src={Facebook} alt="facebook"/></div>
                    <div className="socialNets"><img className="socialNetsPic" src={Telegram} alt="telegram"/></div>
                    <div className="socialNets"><img className="socialNetsPic" src={VK} alt="vk"/></div>
                    <div className="socialNets"><img className="socialNetsPic" src={Instagram} alt="instagram"/></div>
                    <div className="socialNets End"><p className="socialNetsPic">⌗</p></div>
                </Col>
            </Row>
            <Row sm={12} className="footer2_flex">
                <Col sm={6} className="footer2_redline">
                    <div>
                        <p className="footer2_redtext1">THE ULTIMATE</p>
                        <p className="footer2_redtext2">CAR RENTAL SERVICE</p>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className='NavigationTextBlockFooter2'>
                        <p className='navigationText'>Search</p>
                        <p className='navigationText'>Let the car work</p>
                        <p className='navigationText'>Terms of use</p>
                        <p className='navigationText'>Sign up</p>
                        <p className='navigationText'>Log in</p>
                    </div>
                    <div>
                        <div className="three_elem">
                            <p className="footer2_cities">TOP CITIES</p>
                            <div className="wrapper_all_cities">
                                <div className="footer2_cities1">
                                    <p>New-York</p>
                                    <p>Tokyo</p>
                                    <p>Paris</p>
                                    <p>London</p>
                                    <p>Los Angeles</p>
                                </div>
                                <div className="footer2_cities2">
                                    <p>Vienna</p>
                                    <p>Moscow</p>
                                    <p>Warsaw</p>
                                    <p>Berlin</p>
                                    <p>Seattle</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Col>

            </Row>

        </Container>
    );
}

export default Section2Footer;