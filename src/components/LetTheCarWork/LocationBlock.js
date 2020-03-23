import PriceRangeSlider from "../PriceRangeSlider";
import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class LocationBlock extends React.Component {
    render() {
        return (
            <div>
                <Container fluid={"true"}>
                    <Row>
                        <Col sm={3}>
                            <div>

                                    <input className={'inputShape'} type="text" id={"location"}
                                           placeholder={" Country"}/>
                                    <input className={'inputShape'} type="text" id={"location"}
                                           placeholder={" State"}/>
                                    <input className={'inputShape'} type="text" id={"location"}
                                           placeholder={" City"}/>
                                    <input className={'inputShape'} type="text" id={"location"}
                                           placeholder={" Street"}/>
                                    <input className={'inputShape'} type="text" id={"location"}
                                           placeholder={" ZIP"}/>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default LocationBlock;