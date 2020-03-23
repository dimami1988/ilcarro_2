import React from "react";
import Vehicle1Square from "../../images/squareImages/azlk.png";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CarFilters from "../CarFilters";
import Data from "../Data";
import PriceRangeSlider from '../PriceRangeSlider'
import apiManager from "../Data";
import {Link} from "react-router-dom";
import SearchWithoutRegistration from "../SearchWithoutRegistration";
import Search from "./Search";
import SearchResultCars from "./SearchResultCars";
import TabSearchMapFilters from "./TabSearchMapFilters";
import FiltersOnly from "../FiltersOnly";

class FiltersBlock extends React.Component {
    constructor(props) {
        super(props);
        this.vehiclesAvailable = [];
    }

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
        apiManager.showWithoutregistrationFun(data);

    }

    render() {
        return (
            <div>

                <Container fluid={"true"}   className={"searchWithoutReg"}>
                    <TabSearchMapFilters/>
                    <Row>
                        <Col sm={3} className={'searchWithoutRegContainer'}>
                            <p className={'redText '}>Find your car now</p>
                            <FiltersOnly/>
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

export default FiltersBlock;