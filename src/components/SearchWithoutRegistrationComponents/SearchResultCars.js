import PriceRangeSlider from "../PriceRangeSlider";
import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Vehicle1Square from "../../images/squareImages/azlk.png";
import SingleVehicle from "../SingleVehicle";

class SearchResultCars extends React.Component {
    render() {
        return (
            <Container>
                <Row className={"firstVehicleRow"}>
                    <Col sm={6}>
                        <SingleVehicle/>
                    </Col>
                    <Col sm={6}>
                        <SingleVehicle/>
                    </Col>

                </Row>

                <Row className={"firstVehicleRow"}>
                    <Col sm={6}>
                        <SingleVehicle/>
                    </Col>
                    <Col sm={6}>
                        <SingleVehicle/>
                    </Col>
                </Row>

                <Row className={"firstVehicleRow"}>
                    <Col sm={6}>
                        <SingleVehicle/>
                    </Col>
                    <Col sm={6}>
                        <SingleVehicle/>
                    </Col>
                </Row>

            </Container>
        )}}

        export default SearchResultCars;