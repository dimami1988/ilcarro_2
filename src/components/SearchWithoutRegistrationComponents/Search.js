import PriceRangeSlider from "../PriceRangeSlider";
import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TabSearchMapFilters from "./TabSearchMapFilters";
import SearchResultCars from "./SearchResultCars";

class Search extends React.Component {
    render() {
        return (
            <div>
                <Container fluid={"true"} className={"searchWithoutReg"}>
                    <TabSearchMapFilters/>
                    <Row>
                        <Col sm={3} className={'searchWithoutRegContainer'}>
                            <div>
                                <p className={'redText '}>Find your car now</p>
                                <form action="submit" id="findCarForm">
                                    <input className={'inputShape'} type="text" id={"location"}
                                           placeholder={" Location"}/>
                                    <input className={'inputShape'} type="date" id="datefrom" placeholder={" From"}/>
                                    <input className={'inputShape'} type="date" id="datetill" placeholder={" Till"}/>

                                    <div className={"sortBigWrapper"}>

                                        <p>Sort by:</p>
                                        <div className={"sortByWrapper"}>
                                            <div className={"lowToHigh"}><p>Price low to high</p></div>
                                            <div className={"highToLow"}><p>Price high to low</p></div>
                                        </div>

                                        <p className={"sortByWrapper"}>Price by range($/per day):</p>
                                        {PriceRangeSlider}
                                        <div className={"redLine"}></div>

                                    </div>
                                </form>

                                {/*<CarFilters/>*/}

                            </div>
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