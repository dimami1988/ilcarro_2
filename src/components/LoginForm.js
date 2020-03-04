import React from "react";
import MainBackGroundImage from "../images/742079-PSISLA-798.png";

class LoginForm extends React.Component {
    render() {
        return (
            <div className={"flexContainerForm"}>
                <div className={"formWrapperLeft"} style={{backgroundImage: `url(${MainBackGroundImage}`}}></div>
                <div className={"loginContainer"}>
                    <p className={"redText"}>Log in</p>
                    <p className={"greyText"}>Type your data and hit Y'alla!</p>
                    <div className={"loginInputContainer"}>
                        <input className={'inputShape'} type="text" id={"email"} placeholder={" E-mail"}/>
                        <input className={'inputShape'} type="text" id={"password"} placeholder={" Password"}/>
                        <div className={"recoverySentMessageContainer"}>
                        <p className={"recoverySentMessage"}>We sent you instruction</p>
                        <p className={"recoverySentMessage"}>Please, check the e-mail</p>
                        </div>
                    </div>
                    <button className={"yallaBtn"}>Y'alla</button>
                    <div className={"recoveryLink"}>
                    <p>Forgot your password? <a href="https://ya.ru/">Click here!</a></p>
                    </div>
                    <div className={"redLine"}></div>

                </div>
            </div>
        )
    }
}

export default LoginForm;