import React from "react";
import Logo from "../images/logo/component.png";
import Facebook from "../images/socialNets/facebookWhite.png";
import Telegram from "../images/socialNets/telegramWhite.png";
import VK from "../images/socialNets/vkWhite.png";
import Instagram from "../images/socialNets/instagramWhite.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Calendar from "./Calendar";
// import GMap from "google-map-react/develop/GMap";
import Map from "./Map";


function Section2Footer(props) {

    return (

        <Container fluid={'true'}>
            <Row>
                <Col sm={8}>
                    <div>
                        <h1>Может уже хоть что-нибудь наверстаешь, Денис-бездельник?</h1>
                    </div>
                </Col>
                <Col sm={4}>
                    <Calendar/>
                </Col>
            </Row>
            <Row>
                <Col sm={8}>




                </Col>
                <Col sm={4} classname='Map'>
                    <Map/>
                </Col>
            </Row>
            <Row>

            </Row>
        </Container>
    );
}

export default Section2Footer;



// <Row>
//     <Col sm={2}>
//         <p>Engine:</p>
//         <p>Fuel:</p>
//         <p>Gear:</p>
//         <p>Fuel cons:</p>
//         <p>WD:</p>
//     </Col>
//     <Col sm={2}>
//         <p>3.0L V6 DOHC</p>
//         <p>Gas</p>
//         <p>WD:</p>
//         <p>12 l/100km</p>
//         <p>RWD</p>
//     </Col>
//     <Col sm={2}>
//         <p>HP:</p>
//         <p>Torque:</p>
//         <p>Doors:</p>
//         <p>Seats:</p>
//         <p>Class:</p>
//     </Col>
//     <Col sm={2}>
//         <p>250</p>
//         <p>330</p>
//         <p>4</p>
//         <p>5</p>
//         <p>C</p>
//     </Col>
//     <Col sm={2}>Location:</Col>
//     <Col sm={2}>Ulitsa Generala Lizyukova, 4, Voronezh, Voronezh Oblast, Russia, 394053</Col>
// </Row>
//
//
// <Row>
// <Col sm={2}>About:</Col>
// <Col sm={5}>BRAND NEW FULLY LOADED CUSTOM 2018 RANGE ROVER HSE with a 3.0 Liter Supercharged V6 Engine.
// The Range Rover HSE has a 380 horsepower V6, 8-Speed automatic transmission with gearshift
// paddles, all wheel drive, sliding panoramic roof, Bluetooth and USB, touch screen interface
// with navigation and interactive driver display. ADDITIONAL CUSTOM UPGRADES INCLUDE painted
// brake calibers yellow with decals, powder coated wheels gloss black, window tint 35%, and
// full blackout package.</Col>
// <Col sm={2}>Features:</Col>
// <Col sm={3}>
// <p>- 22 inch wheels</p>
// <p>- Power gestured roof</p>
// <p>- Heated front seats</p>
// <p>- Heated steering wheel</p>
// <p>- Ambient interior lighting</p>
// <p>- Meridian sound system</p>
// <p>- Interactive driver display</p>
// <p>- Lane departure warning</p>
// <p>- Emergency braking</p>
// <p>- Traffic sign recognition</p>
// <p>- Adaptive speed limiter</p>
// </Col>
// </Row>