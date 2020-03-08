import React from "react";
import './Footers.css';

class Section1Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowSignUp: false
        };
    }

    render() {
        return (
            // <div className="footer1"><img
            //     src="../images/redline.svg" alt="За стеклом"/>
            //     <div className="footer_redline"></div>
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
                        <div className={(this.props.isShowSignUp) ? 'hidden' : "footer_text3"}>
                            <p className="text3">Affordable prices Guaranteed cars</p>
                            <button onClick={()=>{this.props.showSignUp(this.state.isShowSignUp)}} id="join_footer_button" className="footer_button">Join now!
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Section1Footer;


