import React from "react";
import Vehicle1 from "../images/diagonalImages/zaz.png";
import Vehicle2 from "../images/diagonalImages/gaz.png";
import Vehicle3 from "../images/diagonalImages/azlk.png";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const root = document.getElementById('root');


class Section2MainBlock extends React.Component {


    render() {
        return (
            <Container fluid={"true"} className={"blueBackGround"}>
                <Row className={"redBackGround "}>
                    <Col>
                        <div className={"inlineBlock vehicle1"}>
                            <img className={"imageSizing"} src={Vehicle1} alt={'vehicle'}/>
                            <p className={"vehicleName1 vehicleName"}>REDDEVIL</p>
                            <div className={"whitePriceBox"}>
                                <p className={"dollarSign"}>$</p>
                                <p className={"price"}>230</p>
                                <p className={"perDay"}>PER DAY</p>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className={"inlineBlock "}><img className={"imageSizing"} src={Vehicle2} alt={'vehicle'}/>
                            <p className={"vehicleName"}>BLACKSTAR</p>
                            <div className={"whitePriceBox"}>
                                <p className={"dollarSign"}>$</p>
                                <p className={"price"}>300</p>
                                <p className={"perDay"}>PER DAY</p>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className={"inlineBlock vehicle3"}><img className={"imageSizing "} src={Vehicle3}
                                                                     alt={'vehicle'}/>
                            <p className={"vehicleName3 vehicleName"}>PNEUMODADDY</p>
                            <div className={"whitePriceBox"}>
                                <p className={"dollarSign"}>$</p>
                                <p className={"price"}>180</p>
                                <p className={"perDay"}>PER DAY</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Section2MainBlock;