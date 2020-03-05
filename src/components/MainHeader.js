import React from "react";
import Logo from "../images/LogoLight.svg";
import SignUp from "./SignUp";


class MainHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isShowSignUp: false
        };
    }


    render() {
        return(
            <div className={'HeaderBox'}>
                <div className={'Logo'}>
                    <img  src={Logo} alt={'logo'} />
                </div>

                <nav className='NavigationTextBlock'>
                    <p className={'navigationText'}>Search</p>
                    <p className={'navigationText'}>Let the car work</p>
                    <p className={'navigationText'}>Terms of use</p>
                    <p onClick={()=>{this.props.showSignUp(this.state.isShowSignUp)}} className='navigationText '>Sign up</p>
                    <p className={'navigationText'}>Login</p>
                </nav>
            </div>
        )
    }
}


export default MainHeader;