import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



class Component1 extends React.Component {
    render() {
        return (
        <Container fluid={"true"} >
          <Row>
              <Col className={"blue"} sm={4}>
                  555
              </Col>
              <Col className={"green"} sm={8}>
                  111
              </Col>
          </Row>
        </Container>

    )
    }
}

export default Component1;