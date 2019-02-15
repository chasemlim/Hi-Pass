import React from 'react';
import { openModal } from '../../actions/modal_actions';

class WelcomeNavBar extends React.Component {

    render() {
        return (
            <div className="landing-image">
                <div className="landing-header">
                    <div className="hp-top-left">
                        <div className="sc-logo"></div>
                        <h3 className="hp-signup">HI-PASS</h3>
                    </div>
                    <div className="hp-top-right">
                        <button className="sign-in" onClick={ () => dispatch(openModal('login')) }>Sign in</button>
                        <button className="create-account" onClick={ () => dispatch(openModal('signup')) }>Create account</button>
                    </div>
                </div>
                <div className="landing-image-text">
                    <h1>What's next in music is first on Hi-Pass</h1>
                    <div className="small-landing-image-text">
                        <h2>Upload your first track and begin your journey. Hi-Pass gives you space to create,
                            find your fans, and connect with other artists.</h2>
                    </div>
                    <button className="start-uploading-button" onClick={() => dispatch(openModal('login'))}>Start uploading today</button>
                </div>
            </div>
        )
    }
}

export default WelcomeNavBar;