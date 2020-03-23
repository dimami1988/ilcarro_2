import PriceRangeSlider from "../PriceRangeSlider";
import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FiltersBlock from "../SearchWithoutRegistrationComponents/FiltersBlock";
import SingleVehicle from "../SingleVehicle";
import LocationBlock from "./LocationBlock";
import FiltersOnly from "../FiltersOnly";


class LetTheCarWork extends React.Component {
    render() {
        return (
            <div>
                <div className={"letYourCarWork"}>
                    <p className={'redText'}>Let the car work</p>
                    <p className={"greyTextBox"}>Candy canes topping dessert jelly beans pie jelly beans sweet roll.
                        Toffee cotton candy cake
                        chocolate cake. Bonbon gummi bears jelly-o bonbon fruitcake tootsie roll cake cookie
                        gingerbread. Icing wafer pie pudding ice cream bonbon halvah bonbon topping. Donut halvah
                        tiramisu bear claw tart.</p>
                </div>


                <Container fluid={"true"} className={"searchWithoutReg"}>

                <Row>
                    <Col>

                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <div className={"marginLeft2"}>
                        <p className={'vehicleBlueName '}>Location</p>
                        </div>
                        <LocationBlock/>
                        <div className={"marginLeft2"}>
                        <p className={'vehicleBlueName'}>Car details</p>
                        </div>
                        <FiltersOnly/>
                    </Col>
                    <Col sm={8} className={"marginTop2"}>
                        <SingleVehicle/>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default LetTheCarWork;