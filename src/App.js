import React from "react";
import MainHeader from "./components/MainHeader";
import FindYourCarBlock from "./components/FindYourCarBlock";
import Section2MainBlock from "./components/Section2MainBlock";
import FeedBacks2Rows from "./components/FeedBacks2Rows";
import SignUp from "./components/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import MostPopular from "./components/MostPopular";
import LoginForm from "./components/LoginForm";
import DatePicker1 from "react-datepicker/es";
import SearchWithoutRegistrationBlock from "./components/SearchWithoutRegistration";
import Section1Footer from "./components/section1Footer";
import Section2Footer from "./components/section2Footer";
import './App.css';
import './Footers.css';
import Component1 from "./components/Component";
import NavBar from "./components/NavBar";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          whichButtonPressed : "home"
        };
    }

    showSignUp= (whichButtonPressed)=>{
        this.setState({whichButtonPressed:"registration"})
    };

    showLogin= (whichButtonPressed)=>{
        this.setState({whichButtonPressed:"login"})
    };

    showSearchWithoutRegistration=(whichButtonPressed)=>(
      this.setState({whichButtonPressed:"searchUnReg"})
    );

    showFindYourCar=(whichButtonPressed)=>(
        this.setState({whichButtonPressed: "home"})
    );

   render() {
        if (this.state.whichButtonPressed==="registration") {
            return this.renderSignUp();
        } else if (this.state.whichButtonPressed==="login"){
            return this.renderLogin();
        } else if(this.state.whichButtonPressed==="searchUnReg"){
            return this.renderWithoutRegistration();
        } else if(this.state.whichButtonPressed==="home") {
            return this.renderFindYourCar();
        }else {
            return this.renderFindYourCar();
        }


    }

    renderFindYourCar() {
        return (
            <div>
                <MainHeader showSignUp={this.showSignUp} showLogin={this.showLogin} showFindYourCar={this.showFindYourCar}/>
                <FindYourCarBlock showSearchWithoutRegistration={this.showSearchWithoutRegistration} />
                <Section1Footer showSignUp={this.showSignUp} whichButtonPressed={this.state.whichButtonPressed}/>
                <MostPopular/>
                <Section2MainBlock/>
                <FeedBacks2Rows/>
                <Section2Footer>
                    <NavBar/>
                </Section2Footer>
                {/*<Component1></Component1>*/}
            </div>

        )
    }

    renderLogin() {
    return (
        <div>
            <MainHeader  showSignUp={this.showSignUp} />
            <DatePicker1/>
            <LoginForm/>
            <Section1Footer showSignUp={this.showLogin} showLogin={this.showLogin} whichButtonPressed={this.state.whichButtonPressed}/>
            <MostPopular/>
            <Section2MainBlock/>
            <FeedBacks2Rows/>
            <Section2Footer/>
        </div>
    )
  }

    renderSignUp() {
        return (
            <div>
                <MainHeader showSignUp={this.showSignUp} showLogin={this.showLogin}/>
                <DatePicker1/>
                <SignUp/>
                <Section1Footer showSignUp={this.showSignUp} whichButtonPressed={this.state.whichButtonPressed}/>
                <MostPopular/>
                <Section2MainBlock/>
                <FeedBacks2Rows/>
                <Section2Footer/>
            </div>
        )
    }

    renderWithoutRegistration(){
       return (
           <div>
               <MainHeader showSignUp={this.showSignUp} />
               <SearchWithoutRegistrationBlock showSearchWithoutRegistration={this.showSearchWithoutRegistration}/>
               <Section2Footer>
                   <NavBar/>
               </Section2Footer>
           </div>
       )
    }
}
export default App;