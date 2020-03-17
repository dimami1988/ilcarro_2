import React from "react";
import URL from "../components/Constants";

class Data extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state={
//             carInfo: {
//                 city: undefined,
//                 dateFrom: undefined,
//                 dateTill: undefined,
//             }
//         }
//     }
//
//     getSearch = (city) => {
//         fetch(`${URL}`)
//             .then(res => res.json())
//             .then(json=>this.setState({
//                 carInfo:{
//                     city: json.name,
//                     country: json.sys.country,
//                     temp: json.main.temp,
//                     pressure: json.main.pressure,
//                     sunset: json.sys.sunset
//                 }
//             }));
//     };
//
//     render() {
//         return(
//             <div>
//                 <Form getWeather={this.getWeather}/>
//                 <Weather info={this.state.weatherInfo}/>
//             </div>
//         )
//     }
// }

    showWithoutregistrationFun = async () => {
        fetch(URL + "/search", {
            method: "GET",
            body: JSON.stringify(data),
            headers: {
                "ascending": "true",
                "current_page": 4,
                "end_date": "12.12.2020",
                "start_date": "12.12.2020",
                "items_on_page": 6,
                "latitude": 12,
                "longitude ": 12,
                "max_amount": 300,
                "min_amount": 100,
            },
            credentials: "same-origin"
        }).then(function (response) {
            response.status     //=> number 100–599

            return response.text()
            console.log(response.text())
        }, function (error) {
            error.message //=> String
        })
    }
}

export default Data;