import React from "react";
import '../Footers.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Section1Footer extends React.Component {

    render() {
        return (
            <Container fluid={'true'}>
                <Row className="footer1">
                    {/*<div className="footer_block">*/}
                    {/*<Col sm={10} className="footer_redline"></Col>*/}
                    <Col sm={10}>
                        <div className="footer_redline"></div>
                    </Col>
                    <Col sm={4}>
                        <p className="footer_text1">NEVER MISTAKEN FOR ANYTHING ELSE</p>
                    </Col>
                    <Col sm={4}>
                        <p className="footer_text2">Candy canes topping dessert jelly beans pie jelly beans sweet roll.
                            Toffee cotton candy cake chocolate cake. Bonbon gummi bears jelly-o bonbon fruitcake
                            tootsie roll cake cookie gingerbread. Icing wafer pie pudding ice cream bonbon
                            halvah bonbon topping. Donut halvah tiramisu bear claw tart.
                        </p>
                    </Col>
                    <Col sm={4}>
                        <div className="footer_text3">
                        <p className="text3">Affordable prices Guaranteed cars</p>
                        {this.getJoinBtn()}
                        </div>
                    </Col>
                    {/*</div>*/}
                </Row>
            </Container>
        )
    }

    getJoinBtn() {
        if (this.props.whichButtonPressed !== "registration") {
            return (
                <button id="join_footer_button" onClick={() =>
                {
                    this.props.showSignUp("registration");
                }}
                        className={'footer_button'}>Join now!</button>
            );
        }
    }
}

export default Section1Footer;



