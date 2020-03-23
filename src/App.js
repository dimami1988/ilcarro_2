import React from "react";
import MainHeader from "./components/Headers/MainHeader";
import Section2MainBlock from "./components/Section2MainBlock";
import FeedBacks2Rows from "./components/FeedBacks2Rows";
import 'bootstrap/dist/css/bootstrap.min.css';
import MostPopular from "./components/MostPopular";
import Section1Footer from "./components/Footers/Section1Footer";
import Section2Footer from "./components/Footers/Section2Footer";
import './App.css';
import './Footers.css';
import NavBar from "./components/NavBar";
import 'react-day-picker/lib/style.css';
import RegStep1 from "./components/RegStep1";
import MapContainer from "./components/Map";
import Main from "./components/Main";

class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         whichButtonPressed: "home"
    //     };
    // }
    //
    // showSignUp = (whichButtonPressed) => {
    //     this.setState({whichButtonPressed: "registration"})
    // };
    //
    // showLogin = (whichButtonPressed) => {
    //     this.setState({whichButtonPressed: "login"})
    // };
    //
    // showSearchWithoutRegistration = (whichButtonPressed) => (
    //     this.setState({whichButtonPressed: "searchUnReg"})
    // );
    //
    // showFindYourCar = (whichButtonPressed) => (
    //     this.setState({whichButtonPressed: "home"})
    // );

    render() {
        return(
            <div>
                <MainHeader/>
                <Main/>
                <Section1Footer/>
                <MostPopular/>
                <Section2MainBlock/>
                <FeedBacks2Rows/>
                {/*<Section2Footer>*/}
                {/*    <NavBar/>*/}
                {/*<Section2Footer/>*/}
                <RegStep1/>
                <MapContainer/>
            </div>
        // if (this.state.whichButtonPressed === "registration") {
        //     return this.renderSignUp();
        // } else if (this.state.whichButtonPressed === "login") {
        //     return this.renderLogin();
        // } else if (this.state.whichButtonPressed === "searchUnReg") {
        //     return this.renderWithoutRegistration();
        // } else if (this.state.whichButtonPressed === "home") {
        //     return this.renderFindYourCar();
        // }
        )
    }






//
//     renderFindYourCar() {
//         return (
//             <div>
//                 <MainHeader showSignUp={this.showSignUp} showLogin={this.showLogin}
//                             showFindYourCar={this.showFindYourCar}
//                             showSearchWithoutRegistration={this.showSearchWithoutRegistration}/>
//                 <FindYourCarBlock showSearchWithoutRegistration={this.showSearchWithoutRegistration}/>
//                 <Section1Footer>
//                     <RedButton action={this.showSignUp}>Join Us</RedButton>
//                     {/*там где кнопка не нужна, я просто не пишу строку выше*/}
//                 </Section1Footer>
//                 {/*<Section1Footer showSignUp={this.showSignUp} whichButtonPressed={this.state.whichButtonPressed}/>*/}
//                 <MostPopular/>
//                 <Section2MainBlock/>
//                 <FeedBacks2Rows/>
//                 <Section2Footer>
//                     <NavBar/>
//                 </Section2Footer>
//                 <RegStep1/>
//                 <MapContainer/>
//             </div>
//         )
//     }
//
//     renderLogin() {
//         return (
//             <div>
//                 <MainHeader showSignUp={this.showSignUp} showFindYourCar={this.showFindYourCar}
//                             showSearchWithoutRegistration={this.showSearchWithoutRegistration}/>
//                 <LoginForm/>
//                 <Section1Footer showSignUp={this.showLogin} showLogin={this.showLogin}
//                                 whichButtonPressed={this.state.whichButtonPressed}/>
//                 <MostPopular/>
//                 <Section2MainBlock/>
//                 <FeedBacks2Rows/>
//                 <Section2Footer/>
//             </div>
//         )
//     }
//
//
//     renderSignUp() {
//         return (
//             <div>
//                 <MainHeader showSignUp={this.showSignUp} showLogin={this.showLogin}
//                             showFindYourCar={this.showFindYourCar}
//                             showSearchWithoutRegistration={this.showSearchWithoutRegistration}/>
//                 <SignUp/>
//                 <Section1Footer showSignUp={this.showSignUp} whichButtonPressed={this.state.whichButtonPressed}/>
//                 <MostPopular/>
//                 <Section2MainBlock/>
//                 <FeedBacks2Rows/>
//                 <Section2Footer/>
//             </div>
//         )
//     }
//
//     renderWithoutRegistration() {
//         return (
//             <div>
//                 <MainHeader showSignUp={this.showSignUp} showFindYourCar={this.showFindYourCar}
//                             showSearchWithoutRegistration={this.showSearchWithoutRegistration}/>
//                 <SearchWithoutRegistrationBlock showSearchWithoutRegistration={this.showSearchWithoutRegistration}/>
//                 <Section2Footer>
//                     <NavBar/>
//                 </Section2Footer>
//             </div>
//         )
//     }
 }

export default App;