import React from "react";
import Vehicle1Square from "../images/squareImages/azlk.png";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CarFilters from "./CarFilters";
import Search from "./SearchWithoutRegistrationComponents/Search"
import Data from "./Data";
import PriceRangeSlider from './PriceRangeSlider'
import apiManager from "./Data";
import FiltersBlock from "./SearchWithoutRegistrationComponents/FiltersBlock";
import {Link} from "react-router-dom";
import TabSearchMapFilters from "./SearchWithoutRegistrationComponents/TabSearchMapFilters";
import SearchResultCars from "./SearchWithoutRegistrationComponents/SearchResultCars";

class SearchWithoutRegistrationBlock extends React.Component {
    componentDidMount() {
        const data = {
            "ascending": "true",
            "current_page": 4,
            "end_date": "12.12.2020",
            "start_date": "12.12.2020",
            "items_on_page": 6,
            "latitude": 12,
            "longitude ": 12,
            "max_amount": 300,
            "min_amount": 100,
        };
        debugger;
        apiManager.showWithoutregistrationFun(data);

    }

    render() {
        return (
            <Container fluid={"true"} className={"searchWithoutReg"}>
                <Row>
                    <Col sm={3}>
                        <TabSearchMapFilters/>
                    </Col>
                    <Col sm={9}>
                        <SearchResultCars/>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default SearchWithoutRegistrationBlock;