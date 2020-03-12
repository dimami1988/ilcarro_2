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
import RedButton from "./components/RebButton";


const navigationMapping = {};

const registerPage = (key,renderer) => {
  navigationMapping[key] = renderer;
};

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          currentPage : "login"
        };

        registerPage("registration",this.renderSignUp);
        registerPage("home",this.renderWithoutRegistration);
        registerPage("login",this.renderLogin);
        registerPage("searchUnReg",this.renderFindYourCar);
    }



    showSignUp= async () => {
      // EXAMPLE OF NETWORK REQUEST
      // try {
      //   // key word — "await"
      //   const response = await fetch('https://ya.ru');
        this.setState({
          currentPage:"registration",
          // data: response
        });
      //
      // } catch (error) {
      //
      // }
    };

    showLogin= () => {
        this.setState({currentPage:"login"})
    };

    showSearchWithoutRegistration=()=>(
      this.setState({currentPage:"searchUnReg"})
    );

    showFindYourCar=()=>(
        this.setState({currentPage: "home"})
    );

    getRenderer(key) {
        const callback = navigationMapping[key]
        if (!callback) {
          return this.render404;
        }
        return callback;
    }


   render() {
        return (
          <div>
              <MainHeader
                whichButtonPressed={this.state.currentPage}
                showSignUp={this.showSignUp}
                showLogin={this.showLogin}
                showFindYourCar={this.showFindYourCar}
              />
              {this.getRenderer(this.state.currentPage)()}

              {this.state.currentPage === 'home'
                ? null
                : <>
                    <MostPopular/>
                    <Section2MainBlock/>
                    <FeedBacks2Rows/>
                  </>
              }
              <Section2Footer/>
          </div>
      )
    }

    render404 = () => {
       return <h1>Page not found</h1>
    }

    renderFindYourCar = () => {
        return <>
                <FindYourCarBlock showSearchWithoutRegistration={this.showSearchWithoutRegistration} />
                <Section1Footer>
                <RedButton action={ this.showSignUp }>
                  JoinUs
                </RedButton>
                </Section1Footer>
        </>
    }

    renderLogin = () => {
    return <>
            <DatePicker1/>
            <LoginForm/>
            <Section1Footer>
              <RedButton action={ this.showSignUp }>
                JoinUs
              </RedButton>
            </Section1Footer>
    </>
  }

    renderSignUp = () => {
        return <>
                <DatePicker1/>
                <SignUp/>
                <Section1Footer>
                </Section1Footer>
        </>
    }

    renderWithoutRegistration = () => {
       return (
               <SearchWithoutRegistrationBlock showSearchWithoutRegistration={this.showSearchWithoutRegistration}/>
       )
    }
}
export default App;
