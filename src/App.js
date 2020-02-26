import React from "react";
import MainHeader from "./components/MainHeader";
//import Data from "./components/Data";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
  render() {
    return (
        <div className={'wrapper'}>
                  <MainHeader/>
            <div></div>
        </div>

    )
  }
}
export default App;