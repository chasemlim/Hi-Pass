import React from 'react';
import { Route } from 'react-router-dom';

class WelcomeNavBar extends React.Component {

    render() {
        return (
            <div className="landing-image">
                <div className="landing-header">
                    <div className="hp-top-left">
                        <div className="sc-logo"></div>
                        <h3 className="hp-signup">SOUNDCLOUD</h3>
                    </div>
                    <div className="hp-top-right">
                        <button className="sign-in">Sign in</button>
                        <button className="create-account">Create account</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomeNavBar;