import React from "react";
import apiManager from "./Data";


class FiltersOnly extends React.Component {
    constructor(props) {
        super(props);
        this.vehiclesAvailable = [];
    }

    componentDidMount() {
        const data = {
            "ascending": "true",
            "current_page": 4,
            "end_date": "12.12.2020",
            "start_date": "12.12.2020",
            "items_on_page": 6,
            "latitude": 12,
            "longitude ": 12,
            "max_amount": 300,
            "min_amount": 100,
        };
        apiManager.showWithoutregistrationFun(data);
    }
    render() {
        return (
            <div>
                <form id="findCarFormFilters">

                    <input className={'inputShape'} type="text" id={"location"} placeholder={" Make"}/>
                    {/*<select> this.vehiclesAvailable.map((item, index) => <option value={item} key={index}>{item}</option>)*/}
                    {/*    }</select>*/}

                    <input className={'inputShape'} type="text" id={"location"} placeholder={" Model"}/>
                    {/*<select> this.vehiclesAvailable.map((item, index) => <option value={item} key={index}>{item}</option>)*/}
                    {/*    }</select>*/}

                    <input className={'inputShape'} type="text" id={"location"} placeholder={" Year"}/>
                    {/*<select> this.vehiclesAvailable.map((item, index) => <option value={item} key={index}>{item}</option>)*/}
                    {/*    }</select>*/}

                    <input className={'inputShape'} type="text" id={"location"} placeholder={" Engine"}/>
                    {/*<select> this.vehiclesAvailable.map((item, index) => <option value={item} key={index}>{item}</option>)*/}
                    {/*    }</select>*/}

                    <input className={'inputShape'} type="text" id={"location"} placeholder={" Fuel"}/>
                    {/*<select> this.vehiclesAvailable.map((item, index) => <option value={item} key={index}>{item}</option>)*/}
                    {/*    }</select>*/}

                    <input className={'inputShape'} type="text" id={"location"}
                           placeholder={" Transmission"}/>
                    {/*<select> this.vehiclesAvailable.map((item, index) => <option value={item} key={index}>{item}</option>)*/}
                    {/*    }</select>*/}

                    <input className={'inputShape'} type="text" id={"location"} placeholder={" W/D"}/>
                    {/*<select> this.vehiclesAvailable.map((item, index) => <option value={item} key={index}>{item}</option>)*/}
                    {/*    }</select>*/}

                    <input className={'inputShape'} type="text" id={"location"}
                           placeholder={" Horsepower"}/>
                    {/*<select> this.vehiclesAvailable.map((item, index) => <option value={item} key={index}>{item}</option>)*/}
                    {/*    }</select>*/}

                    <input className={'inputShape'} type="text" id={"location"}
                           placeholder={" Fuel consumption"}/>
                    {/*<select> this.vehiclesAvailable.map((item, index) => <option value={item} key={index}>{item}</option>)*/}
                    {/*    }</select>*/}

                </form>

                {/*<CarFilters/>*/}

                <div className={"redLine"}></div>


            </div>
    )
    }
    }

    export default FiltersOnly;

