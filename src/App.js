import React from "react";
import MainHeader from "./components/MainHeader";
import FindYourCarBlock from "./components/FindYourCarBlock";
//import Data from "./components/Data";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
  render() {
    return (
        <div className={'wrapper'}>
                  <MainHeader/>
            <FindYourCarBlock/>

        </div>

    )
  }
}
export default App;