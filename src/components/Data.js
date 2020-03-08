// import React from "react";
// import Form from "./Form";
// import Weather from "./Weather";
// import URL from  "../components/Constants";
//
// class Data extends React.Component{
//
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
// export default Data;