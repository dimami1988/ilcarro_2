import {Route, Switch} from "react-router-dom";
import FindYourCarBlock from "./FirstThreePages/FindYourCarBlock";
import LoginForm from "./FirstThreePages/LoginForm";
import SignUp from "./FirstThreePages/SignUp";
import SearchWithoutRegistrationBlock from "./SearchWithoutRegistration";
import React from "react";
import Col from "react-bootstrap/Col";
import FiltersBlock from "./SearchWithoutRegistrationComponents/FiltersBlock";
import {MapContainer} from "./Map";
import Search from "./SearchWithoutRegistrationComponents/Search";
import SearchUnRegMapTab from "./SearchWithoutRegistrationComponents/SearchUnRegMapTab";
import LetTheCarWork from "./LetTheCarWork/LetTheCarWork";

class Main extends React.Component {

    render() {
        return (
            <Switch>
                <Route path='/' exact component={FindYourCarBlock}/>
                <Route path='/letyourcarwork' component={LetTheCarWork}/>
                <Route path='/login' component={LoginForm}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/search' component={Search}/>
                <Route path='/filters' component={FiltersBlock}/>
                <Route path='/map' component={SearchUnRegMapTab}/>
            </Switch>
        )
    }
}

export default Main;

