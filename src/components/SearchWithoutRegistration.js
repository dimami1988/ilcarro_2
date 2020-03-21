import React from "react";
import Vehicle1Square from "../images/squareImages/azlk.png";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import apiManager from "./Data";
import URL from "./Constants";
import CarFiltersDataSource from "./CarFiltersDataSourse";
// import PriceRangeSlider from './PriceRangeSlider'
import CarFilter from './CarFilters';

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

        // const TestURL = URL + "/filters";
        // console.log(TestURL);
        // fetch(TestURL,{
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then(
        //     (response) => {
        //         response.json().then(
        //             (json) => {
        //                 debugger;
        //             },
        //             (err) => {
        //                 debugger;
        //             }
        //         )
        //     }
        // );

        // apiManager.showWithoutregistrationFun(data).then(
        //     (jsonData)=> {
        //         debugger;
        //         // const result = parceData
        //     }
        // ,(err) => {
        //     debugger;
        // })


    }

    render() {
        return (
                <Container  fluid={"true"} className={"searchWithoutReg"}>
                    <Row>
                        <Col sm={4} className={'searchWithoutRegContainer'}>
                            <p className={'redText '}>Find your car now</p>
                            <form action="submit" id="findCarForm">
                                <input className={'inputShape'} type="text" id={"location"} placeholder={" Location"}/>
                                <input className={'inputShape'} type="date" id="datefrom" placeholder={" From"}/>
                                <input className={'inputShape'} type="date" id="datetill" placeholder={" Till"}/>

                                <div className={"sortBigWrapper"}>

                                    <p>Sort by:</p>
                                    <div className={"sortByWrapper"}>
                                        <div className={"lowToHigh"}><p>Price low to high</p></div>
                                        <div className={"highToLow"}><p>Price high to low</p></div>
                                    </div>

                                    <p style={{margin: "5em"}}>Price by range($/per day):</p>
                                      {/*<PriceRangeSlider/>*/}
                                </div>
                            </form>

                            {/*<CarFilter/>*/}

                            <div className={"redLine"}></div>
                        </Col>

                        <Col sm={8} className={"vehicleCardsContainer "}>
                            <Container>
                                <Row className={"firstVehicleRow"}>
                                    <Col sm={6}  classname={"registrationPhotoContainer"}>
                                        <div><img src={Vehicle1Square} alt={'vehicle '}/></div>
                                        <p className={"vehicleName2 vehicleBlueName "}>BLACKSTAR</p>
                                        <p>2020</p>
                                        <div className={"blackPriceBox"}>
                                            <p className={"dollarSignBlack"}>$</p>
                                            <p className={"priceBlack"}>300</p>
                                            <p className={"perDaySmall"}>PER DAY</p>
                                        </div>
                                    </Col>

                                    <Col sm={6}  classname={"registrationPhotoContainer"}>
                                        <div><img src={Vehicle1Square} alt={'vehicle '}/></div>
                                        <p className={"vehicleName2 vehicleBlueName "}>BLACKSTAR</p>
                                        <p>2020</p>
                                        <div className={"blackPriceBox"}>
                                            <p className={"dollarSignBlack"}>$</p>
                                            <p className={"priceBlack"}>300</p>
                                            <p className={"perDaySmall"}>PER DAY</p>
                                        </div>
                                    </Col>

                                </Row>
                                <Row className={"firstVehicleRow"}>
                                    <Col sm={6}  classname={"registrationPhotoContainer"}>
                                        <div><img src={Vehicle1Square} alt={'vehicle '}/></div>
                                        <p className={"vehicleName2 vehicleBlueName "}>BLACKSTAR</p>
                                        <p>2020</p>
                                        <div className={"blackPriceBox"}>
                                            <p className={"dollarSignBlack"}>$</p>
                                            <p className={"priceBlack"}>300</p>
                                            <p className={"perDaySmall"}>PER DAY</p>
                                        </div>
                                    </Col>

                                    <Col sm={6}  classname={"registrationPhotoContainer"}>
                                        <div><img src={Vehicle1Square} alt={'vehicle '}/></div>
                                        <p className={"vehicleName2 vehicleBlueName "}>BLACKSTAR</p>
                                        <p>2020</p>
                                        <div className={"blackPriceBox"}>
                                            <p className={"dollarSignBlack"}>$</p>
                                            <p className={"priceBlack"}>300</p>
                                            <p className={"perDaySmall"}>PER DAY</p>
                                        </div>
                                    </Col>

                                </Row>
                                <Row className={"firstVehicleRow"}>
                                    <Col sm={6}  classname={"registrationPhotoContainer"}>
                                        <div><img src={Vehicle1Square} alt={'vehicle '}/></div>
                                        <p className={"vehicleName2 vehicleBlueName "}>BLACKSTAR</p>
                                        <p>2020</p>
                                        <div className={"blackPriceBox"}>
                                            <p className={"dollarSignBlack"}>$</p>
                                            <p className={"priceBlack"}>300</p>
                                            <p className={"perDaySmall"}>PER DAY</p>
                                        </div>
                                    </Col>

                                    <Col sm={6}  classname={"registrationPhotoContainer"}>
                                        <div><img src={Vehicle1Square} alt={'vehicle '}/></div>
                                        <p className={"vehicleName2 vehicleBlueName "}>BLACKSTAR</p>
                                        <p>2020</p>
                                        <div className={"blackPriceBox"}>
                                            <p className={"dollarSignBlack"}>$</p>
                                            <p className={"priceBlack"}>300</p>
                                            <p className={"perDaySmall"}>PER DAY</p>
                                        </div>
                                    </Col>

                                </Row>
                            </Container>

                        </Col>
                    </Row>
                </Container>

                )
                }
                }

                export default SearchWithoutRegistrationBlock;