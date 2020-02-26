import React from "react";
import LogoLight from "../images/LogoLight.svg";


class MainHeader extends React.Component{
    render() {
        return(
            <div className={'mainNavigation'}>
                <div className={'LogoLight'}>
                    <img  src={LogoLight} alt={'logo'} />
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