import React from 'react';
import { Provider } from 'react-redux';
import { 
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import WelcomeContainer from './welcome/welcome_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import WelcomeNavBarContainer from './welcome_navbar/welcome_navbar_container';

const App = () => (
    <div className="main-box">
        <WelcomeNavBarContainer />
        <Switch>
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;