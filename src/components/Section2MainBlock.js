import React from "react";
import Vehicle1 from "../images/zaz.png";
import Vehicle2 from "../images/gaz.png";
import Vehicle3 from "../images/azlk.png";
const root = document.getElementById('root');

class Section2MainBlock extends React.Component{




    render() {
        return(
                <div className={"blueBackGround"} >
                    <div className={"redBackGround"} >

                        <div className={"inlineBlock vehicle1"}>
                            <img  className={"imageSizing"} src={Vehicle1} alt={'vehicle'} />
                            <p className={"vehicleName1 vehicleName"}>REDDEVIL</p>
                            <div className={"whitePriceBox"}>
                                <p className={"dollarSign"}>$</p>
                                <p className={"price"}>230</p>
                                <p className={"perDay"}>PER DAY</p>
                            </div>
                        </div>

                        <div className={"inlineBlock"}> <img className={"imageSizing"} src={Vehicle2} alt={'vehicle'} />
                            <p className={"vehicleName2 vehicleName"}>BLACKSTAR</p>
                            <div className={"whitePriceBox"}>
                                <p className={"dollarSign"}>$</p>
                                <p className={"price"}>300</p>
                                <p className={"perDay"}>PER DAY</p>
                            </div>
                        </div>
                        <div className={"inlineBlock vehicle3 "}><img className={"imageSizing "} src={Vehicle3} alt={'vehicle'} />
                            <p className={"vehicleName3 vehicleName"}>PNEUMODADDY</p>
                            <div className={"whitePriceBox"}>
                                <div className={"dollarBox"}>
                                <p className={"dollarSign"}>$</p>
                                </div>
                                <div className={"priceBox"}>
                                <p className={"price"}>180</p>
                                </div>
                                <div className={"perDayBox"}>
                                <p className={"perDay"}>PER DAY</p>
                                </div>
                            </div>
                    </div>
                </div>
                </div>

        )
    }
}
export default Section2MainBlock;