import React from "react";
import MainBackGroundImage from "../images/742079-PSISLA-798.png";
import Vehicle1Square from "../images/squareImages/azlk.png";



class SearchWithoutRegistrationBlock extends React.Component{
    render() {
        return(
            <div className={"formWrapper"} >

                <div className={'searchWithoutRegContainer'}>

                    <p className={'redText ' }>Find your car now</p>
                    <form action="" id="findCarForm">

                        <input className={'inputShape'} type="text" id={"location"} placeholder={" Location"}/>
                        <input className={'inputShape'} type="date" id="datefrom" placeholder={" From"}/>
                        <input className={'inputShape'}  type="date" id="datetill" placeholder={" Till"}/>
                        <p>Sort by:</p>
                        <div className={"sortByWrapper"}>
                            <div className={"lowToHich"}><p>Price low to high</p></div>
                            <div className={"highToLow"}><p>Price high to low</p></div>
                        </div>
                        <p>Price by range($/per day):</p>
                    </form>
                    <div className={"redLine"}></div>

                </div>

                <div className={"vehicleCardsContainer"}></div>
                <div><img src={Vehicle1Square} alt={'vehicle'}/></div>
                <div></div>
                <div></div>

            </div>
        )
    }
}
export default SearchWithoutRegistrationBlock;