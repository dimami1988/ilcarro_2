import React from "react";
import MainHeader from "./components/MainHeader";
import FindYourCarBlock from "./components/FindYourCarBlock";
import Section2MainBlock from "./components/Section2MainBlock";
import FeedBacks2Rows from "./components/FeedBacks2Rows";
import SignUp from "./components/SignUp";
//import Data from "./components/Data";
import 'bootstrap/dist/css/bootstrap.min.css';
import MostPopular from "./components/MostPopular";
import LoginForm from "./components/LoginForm";
import DatePicker1 from "react-datepicker/es";
import SearchWithoutRegistrationBlock from "./components/SearchWithoutRegistration";
import Section1Footer from "./components/section1Footer";
import Section2Footer from "./components/section2Footer";
import './App.css';
import './Footers.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowSignUp: false
        };

    }
    showSignUp= (isShowSignUp)=>{
        this.setState({isShowSignUp:true})
    //    #join_footer_button
    };









   render() {
        if (this.state.isShowSignUp) {
            return this.renderSignUp();
        } else {
            return this.renderMain();
        }
    }

    renderMain() {
        return (
            <div className={'wrapper'}>
                <MainHeader showSignUp={this.showSignUp}/>
                <DatePicker1/>
                <FindYourCarBlock showSignUp={this.showSignUp}/>
                <Section1Footer/>
                <MostPopular/>
                <Section2MainBlock/>
                <FeedBacks2Rows/>
                <Section2Footer/>
                <SearchWithoutRegistrationBlock/>
            </div>

        )
    }


  renderSignUp() {
    return (
        <div className={'wrapper'}>
                  <MainHeader showSignUp={this.showSignUp}/>
            <DatePicker1/>
            <SignUp/>
            <Section1Footer/>
            <MostPopular/>
            <Section2MainBlock/>
            <FeedBacks2Rows/>
            <Section2Footer/>
            <LoginForm/>
            <SearchWithoutRegistrationBlock/>
        </div>

    )
  }
}
export default App;