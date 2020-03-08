import React from "react";
import Vehicle1Square from "../images/squareImages/azlk.png";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import PriceRangeSlider from './PriceRangeSlider'

class SearchWithoutRegistrationBlock extends React.Component {
    render() {
        return (
                <Container>
                    <Row>
                        <Col sm={6} className={'searchWithoutRegContainer'}>
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
                            <div className={"redLine"}></div>
                        </Col>

                        <Col sm={8} className={"vehicleCardsContainer "}>
                            <Container>
                                <Row className={"firstVehicleRow"}>
                                    <Col sm={6}  classname={"registrationPhotoContainer"}>
                                        <div><img src={Vehicle1Square} alt={'vehicle inline-block'}/></div>
                                        <p className={"vehicleName2 vehicleBlueName inline-block"}>BLACKSTAR</p>
                                        <p>2020</p>
                                        <div className={"whitePriceBox inline-block"}>
                                            <p className={"dollarSign inline-block"}>$</p>
                                            <p className={"price inline-block"}>300</p>
                                            <p className={"perDay inline-block"}>PER DAY</p>
                                        </div>
                                    </Col>

                                    <Col sm={6}>
                                        <div><img src={Vehicle1Square} alt={'vehicle inline-block'}/>
                                        </div>
                                        <p className={"vehicleName2 vehicleBlueName inline-block"}>BLACKSTAR</p>
                                        <p>2020</p>
                                        <div className={"whitePriceBox inline-block"}>
                                            <p className={"dollarSign inline-block"}>$</p>
                                            <p className={"price inline-block"}>300</p>
                                            <p className={"perDay inline-block"}>PER DAY</p>
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