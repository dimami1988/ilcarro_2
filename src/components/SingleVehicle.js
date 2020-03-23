import Vehicle1Square from "../images/squareImages/azlk.png";
import Col from "react-bootstrap/Col";
import React from "react";
import SearchResultCars from "./SearchWithoutRegistrationComponents/SearchResultCars";

class SingleVehicle extends React.Component {
    render() {
        return (
            <div>
                <div><img src={Vehicle1Square} alt={'vehicle '} className={"registrationPhotoContainer"}/></div>
                <p className={"vehicleBlueName "}> PNEUMODADDY <p className={"vehicleYear"} >2020</p> </p>

                    <div className={"blackPriceBox"}>
                        <p className={"dollarSignBlack"}> $ </p>
                            <p className={"priceBlack"}>300</p>
                            <p className={"perDaySmall"}> PER DAY </p>
                    </div>
            </div>
                    )}}

                    export default SingleVehicle;