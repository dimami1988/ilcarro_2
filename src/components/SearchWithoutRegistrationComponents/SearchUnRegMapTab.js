import PriceRangeSlider from "../PriceRangeSlider";
import React from "react";
import Logo from "../../images/logo/LogoLight.svg";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import MainHeader from "../Headers/MainHeader";
import SearchWithoutRegistrationBlock from "../SearchWithoutRegistration";
import SearchWithoutRegistration from "../SearchWithoutRegistration";
import Vehicle1Square from "../../images/squareImages/azlk.png";
import TabSearchMapFilters from "./TabSearchMapFilters";
import SearchResultCars from "./SearchResultCars";
import Map from "../Map";

class Search extends React.Component {
    render() {
        return (
            <div>
                <Container fluid={"true"} className={"searchWithoutReg"}>
                    <TabSearchMapFilters/>
                    <Row>
                        <Col sm={3}>
                            <Map className={'searchWithoutRegContainer'}/>
                        </Col>
                        <Col sm={9}>
                            <SearchResultCars/>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Search;