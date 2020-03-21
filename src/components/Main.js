import React from "react";
import {Route, Switch} from "react-router-dom";
import SignUp from "./SignUp";
import LoginForm from "./LoginForm";
import SearchWithoutRegistrationBlock from "./SearchWithoutRegistration";
import FindYourCarBlock from "./FindYourCarBlock";

class Main extends React.Component {

    render() {
        return (
            <Switch>
                <Route path='/search' exact component={SearchWithoutRegistrationBlock}/>
                <Route path='/login' component={LoginForm}/>
                <Route path='/signUp' component={SignUp}/>
                <Route path='/homepage' component={FindYourCarBlock}/>
            </Switch>
        )
    }
}

export default Main;