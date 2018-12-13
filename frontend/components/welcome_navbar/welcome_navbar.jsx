import React from 'react';
import { Route } from 'react-router-dom';

class WelcomeNavBar extends React.Component {

    render() {
        return (
            <div className="landing-header">
                <div className="hp-top-left">
                    <div className="sc-logo"></div>
                    <h3 className="hp-signup">Hi-Pass</h3>
                </div>
                <div className="hp-top-right">
                    <button>Sign in</button>
                    <button>Create account</button>
                </div>
            </div>
        )
    }
}

export default WelcomeNavBar;