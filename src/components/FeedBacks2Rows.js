import React from "react";
import UserPic from "../images/userImages/userPic.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class FeedBacks2Rows extends React.Component {
    render() {
        return (
            <Container fluid={"true"}>
                <Row>
                    <Col sm={12}>
                        <div><p className={"blueBigText marginLeft"}>LATEST FEEDBACKS FROM OUR CUSTOMERS</p></div>
                    </Col>


                    <div className={"section2Wrapper"}>
                        <div className={"firstColumn"}>
                            <Container fluid={"true"}>
                                <Row>
                                    <Col sm={2}>

                                        <img className={"userPics"} src={UserPic} alt={'happy client'}/>
                                    </Col>
                                    <Col sm={10}>
                                        <p className={" smallBlueText"}>
                                            Candy canes topping dessert jelly beans pie jelly beans sweet roll. Toffee
                                            cotton
                                            candy
                                            cake chocolate cake. Bonbon gummi bears jelly-o bonbon fruitcake tootsie
                                            roll cake
                                            cookie
                                            gingerbread. </p>
                                    </Col>
                                    <Col sm={12}>
                                        <div className={"nameDateWrapper"}>
                                            <p className={"displayInline redSmallText"}>Candy Miles</p>
                                            <p className={"displayInline blackSmalltext"}>22 September 2019</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                            <Container fluid={"true"}>
                                <Row>
                                    <Col sm={2}>

                                        <img className={"userPics"} src={UserPic} alt={'happy client'}/>
                                    </Col>
                                    <Col sm={10}>
                                        <p className={" smallBlueText"}>
                                            Candy canes topping dessert jelly beans pie jelly beans sweet roll. Toffee
                                            cotton
                                            candy
                                            cake chocolate cake. Bonbon gummi bears jelly-o bonbon fruitcake tootsie
                                            roll cake
                                            cookie
                                            gingerbread. </p>
                                    </Col>
                                    <Col sm={12}>
                                        <div className={"nameDateWrapper"}>
                                            <p className={"displayInline redSmallText"}>Candy Miles</p>
                                            <p className={"displayInline blackSmalltext"}>22 September 2019</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                            <Container fluid={"true"}>
                                <Row>
                                    <Col sm={2}>

                                        <img className={"userPics"} src={UserPic} alt={'happy client'}/>
                                    </Col>
                                    <Col sm={10}>
                                        <p className={" smallBlueText"}>
                                            Candy canes topping dessert jelly beans pie jelly beans sweet roll. Toffee
                                            cotton
                                            candy
                                            cake chocolate cake. Bonbon gummi bears jelly-o bonbon fruitcake tootsie
                                            roll cake
                                            cookie
                                            gingerbread. </p>
                                    </Col>
                                    <Col sm={12}>
                                        <div className={"nameDateWrapper"}>
                                            <p className={"displayInline redSmallText"}>Candy Miles</p>
                                            <p className={"displayInline blackSmalltext"}>22 September 2019</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                        </div>

                        <div className={"secondColumn"}>

                            <Container fluid={"true"}>
                                <Row>
                                    <Col sm={2}>

                                        <img className={"userPics"} src={UserPic} alt={'happy client'}/>
                                    </Col>
                                    <Col sm={10}>
                                        <p className={" smallBlueText"}>
                                            Candy canes topping dessert jelly beans pie jelly beans sweet roll. Toffee
                                            cotton
                                            candy
                                            cake chocolate cake. Bonbon gummi bears jelly-o bonbon fruitcake tootsie
                                            roll cake
                                            cookie
                                            gingerbread. </p>
                                    </Col>
                                    <Col sm={12}>
                                        <div className={"nameDateWrapper"}>
                                            <p className={"displayInline redSmallText"}>Candy Miles</p>
                                            <p className={"displayInline blackSmalltext"}>22 September 2019</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                            <Container fluid={"true"}>
                                <Row>
                                    <Col sm={2}>

                                        <img className={"userPics"} src={UserPic} alt={'happy client'}/>
                                    </Col>
                                    <Col sm={10}>
                                        <p className={" smallBlueText"}>
                                            Candy canes topping dessert jelly beans pie jelly beans sweet roll. Toffee
                                            cotton
                                            candy
                                            cake chocolate cake. Bonbon gummi bears jelly-o bonbon fruitcake tootsie
                                            roll cake
                                            cookie
                                            gingerbread. </p>
                                    </Col>
                                    <Col sm={12}>
                                        <div className={"nameDateWrapper"}>
                                            <p className={"displayInline redSmallText"}>Candy Miles</p>
                                            <p className={"displayInline blackSmalltext"}>22 September 2019</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                            <Container fluid={"true"}>
                                <Row>
                                    <Col sm={2}>

                                        <img className={"userPics"} src={UserPic} alt={'happy client'}/>
                                    </Col>
                                    <Col sm={10}>
                                        <p className={" smallBlueText"}>
                                            Candy canes topping dessert jelly beans pie jelly beans sweet roll. Toffee
                                            cotton
                                            candy
                                            cake chocolate cake. Bonbon gummi bears jelly-o bonbon fruitcake tootsie
                                            roll cake
                                            cookie
                                            gingerbread. </p>
                                    </Col>
                                    <Col sm={12}>
                                        <div className={"nameDateWrapper"}>
                                            <p className={"displayInline redSmallText"}>Candy Miles</p>
                                            <p className={"displayInline blackSmalltext"}>22 September 2019</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                        </div>
                    </div>
                </Row>
            </Container>
        )
    }
}

export default FeedBacks2Rows;