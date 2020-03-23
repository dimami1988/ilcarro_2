import React from "react";
import MainBackGroundImage from "../../images/background/742079-PSISLA-798.png";
import DatePicker1 from "react-datepicker/es";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";


class FindYourCarBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: undefined
        };
    }

    render() {
        return (

            <Container fluid={"true"} className={"formWrapper"} style={{backgroundImage: `url(${MainBackGroundImage}`}}>

                <Row className={'searchContainer'}>
                    <Col>
                        <p className={'redText '}>Find your car now</p>
                        <p className={'greyText'}>Type your data and hit Y'alla</p>
                        <form id="findCarForm">
                            <DatePicker1 className={'inputShape'}
                                         selected={this.state.date}
                                         onChange={this.handleChange}
                                         showTimeSelect
                                         dateFormat="LLL"/>
                            <input className={'inputShape'} type="text" id={"location"} placeholder={" Location"}/>
                            <input className={'inputShape'} type="date" id="datefrom" placeholder={" From"}/>
                            <input className={'inputShape'} type="date" id="datetill" placeholder={" Till"}/>
                            <Link to='/search' style={{ textDecoration: 'none' }}>
                            <button className={"yallaBtn"}>Y'alla!</button>
                            </Link>
                        </form>
                        <div className={"redLine"}></div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default FindYourCarBlock;