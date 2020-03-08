import React from "react";
import MainBackGroundImage from "../images/background/742079-PSISLA-798.png";
import DatePicker1 from "react-datepicker/es";



class FindYourCarBlock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            whichButtonPressed: "home"

        };
    }
    render() {
        return(
            <div className={"formWrapper"} style={{ backgroundImage: `url(${MainBackGroundImage}` }}>

               <div className={'searchContainer'}>

                <p className={'redText ' }>Find your car now</p>
                <p className={'greyText'}>Type your data and hit Y'alla</p>
                <form action="" id="findCarForm">
                    <DatePicker1/>
                  <input className={'inputShape'} type="text" id={"location"} placeholder={" Location"}/>
                  <input className={'inputShape'} type="date" id="datefrom" placeholder={" From"}/>
                  <input className={'inputShape'}  type="date" id="datetill" placeholder={" Till"}/>
                  <button  onClick={()=>{this.props.showSearchWithoutRegistration(this.state.whichButtonPressed)}} className={"yallaBtn"}>Y'alla!</button>
              </form>
                   <div className={"redLine"}></div>
               </div>

            </div>
        )
    }
}
export default FindYourCarBlock;