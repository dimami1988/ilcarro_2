import React from "react";
import MainHeader from "./components/MainHeader";
import FindYourCarBlock from "./components/FindYourCarBlock";
import Section2MainBlock from "./components/Section2MainBlock";
import FeedBacks2Rows from "./components/FeedBacks2Rows";
//import Data from "./components/Data";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MostPopular from "./components/MostPopular";


class App extends React.Component {
  render() {
    return (
        <div className={'wrapper'}>
                  <MainHeader/>
            <FindYourCarBlock/>
            <MostPopular/>
            <Section2MainBlock/>
            <FeedBacks2Rows/>
        </div>

    )
  }
}
export default App;