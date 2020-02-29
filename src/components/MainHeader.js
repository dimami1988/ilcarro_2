import React from "react";
import Logo from "../images/LogoLight.svg";


class MainHeader extends React.Component{
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
                    <p className='navigationText'>Sign up</p>
                    <p className={'navigationText'}>Login</p>
                </nav>

            </div>
        )
    }
}
export default MainHeader;