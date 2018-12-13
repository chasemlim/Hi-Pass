import React from 'react';
import { Route } from 'react-router-dom';

class WelcomePage extends React.Component {

    render() {
        return (
            <div className="welcome-page">
                <div className="search-and-upload">
                    <div className="search-bar">
                        <form action="">
                            <input className="welcome-search-bar" type="search" placeholder="Search for artists, bands, tracks, podcasts" />
                            <i className="fas fa-search s-icon"></i>
                        </form>

                    </div>
                    <div className="search-upload">
                        <h2 className="welcome-or">or</h2>
                        <button className="welcome-upload-own-button">Upload your own</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomePage;