import React from "react";
import Vehicle1 from "../images/zaz.png";
import Vehicle2 from "../images/gaz.png";
import Vehicle3 from "../images/azlk.png";
import Logo from "../images/LogoLight.svg";

class Section2MainBlock extends React.Component{
    render() {
        return(
                <div className={"blueBackGround"} >
                    <div className={"redBackGround"} >

                        <div className={"inlineBlock"}>
                            <img  className={"inlineBlock imageSizing"} src={Vehicle1} alt={'vehicle'} />
                            <p className={"vehicleName1 vehicleName"}>REDDEVIL</p>
                            <div>
                                <p>230</p>
                            </div>
                        </div>
                        <div className={"inlineBlock"}> <img className={"inlineBlock imageSizing"} src={Vehicle2} alt={'vehicle'} />
                            <p className={"vehicleName2 vehicleName"}>BLACKSTAR</p>
                            <div>
                                <p>300</p>
                            </div>
                        </div>
                        <div className={"inlineBlock"}><img className={"inlineBlock imageSizing"} src={Vehicle3} alt={'vehicle'} />
                            <p className={"vehicleName3 vehicleName"}>PNEUMODADDY</p>
                            <div>
                                <p>180</p>
                            </div>
                    </div>
                </div>
                </div>

        )
    }
}
export default Section2MainBlock;