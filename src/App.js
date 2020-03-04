import React from "react";
import MainHeader from "./components/MainHeader";
import FindYourCarBlock from "./components/FindYourCarBlock";
import Section2MainBlock from "./components/Section2MainBlock";
import FeedBacks2Rows from "./components/FeedBacks2Rows";
import SignUp from "./components/SignUp";
//import Data from "./components/Data";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MostPopular from "./components/MostPopular";
import LoginForm from "./components/LoginForm";
import DatePicker1 from "react-datepicker/es";
import SearchWithoutRegistrationBlock from "./components/SearchWithoutRegistration";


class App extends React.Component {
  render() {
    return (
        <div className={'wrapper'}>
                  <MainHeader/>
            <DatePicker1/>
            <FindYourCarBlock/>
            <MostPopular/>
            <Section2MainBlock/>
            <FeedBacks2Rows/>
            <LoginForm/>
            <SignUp/>
            <SearchWithoutRegistrationBlock/>
        </div>

    )
  }
}
export default App;