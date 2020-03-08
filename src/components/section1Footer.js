import React from "react";
import './Footers.css';

class Section1Footer extends React.Component {
    state = {
        whichButtonPressed: "home"

    };

    constructor(props) {
        super(props);
        this.state = {
            whichButtonPressed: props.whichButtonPressed

        };
    }

    render() {
        return (
            <div className="footer1">
                <div className="footer_block">
                    <div className="footer_redline">
                        <div className="footer_text1">
                            <p>NEVER MISTAKEN FOR ANYTHING ELSE</p>
                        </div>
                        <div className="footer_text2 ">
                            <p>Candy canes topping dessert jelly beans pie jelly beans sweet roll. Toffee
                                cotton candy cake chocolate cake. Bonbon gummi bears jelly-o bonbon fruitcake
                                tootsie roll cake cookie gingerbread. Icing wafer pie pudding ice cream bonbon
                                halvah bonbon topping. Donut halvah tiramisu bear claw tart.
                            </p>
                        </div>
                        <div className="footer_text3">
                            <p className="text3">Affordable prices Guaranteed cars</p>
                            {this.getJoinBtn()}

                        </div>
                    </div>
                </div>

            </div>
        )
    }

    getJoinBtn() {
        if (!(this.state.whichButtonPressed === "registration")) {
            return (
                <button id="join_footer_button" onClick={() => {
                    this.props.showSignUp("registration")
                }}
                        className={'footer_button'}>Join now!</button>
            )
        }
    }
}

export default Section1Footer;



