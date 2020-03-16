import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class MostPopular extends React.Component{
    render() {
        return (
            <Container fluid={"true"}>
                <Row>
                    <Col sm={1} ><p className={"redNumber marginTop"}>3</p></Col>
                    <Col sm={6}><p className={"blueBigText marginTop"}>MOST POPULAR<br/>CHOICES IN YOUR AREA</p></Col>
                    <Col sm={4}><p className={"smallBlueText marginTop"}>Candy canes topping dessert jelly beans pie jelly
                        beans sweet roll.
                        Toffee cotton candy cake chocolate cake. Bonbon gummi bears jelly-o bonbon fruitcake tootsie
                        roll cake cookie gingerbread. Icing wafer pie pudding ice cream bonbon halvah bonbon topping.
                        Donut halvah tiramisu bear claw tart.</p>
                    </Col>
                    </Row>
            </Container>
    )  }

    }
    export default MostPopular;