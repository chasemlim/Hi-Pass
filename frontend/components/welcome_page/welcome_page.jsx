import React from 'react';
import { Route } from 'react-router-dom';
import SongGrid from '../songs/song_grid';
import WelcomeNavBarContainer from '../welcome_navbar/welcome_navbar_container';
import { openModal } from '../../actions/modal_actions';

class WelcomePage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchSongs().then( result => { this.setState({ songs: result.songs }) })
    }

    render() {
        return (
            <div>
                <WelcomeNavBarContainer />
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
                            <button className="welcome-upload-own-button" onClick={() => dispatch(openModal('login'))}>Upload your own</button>
                        </div>
                    </div>

                    <div className="trending-text">
                        <p>Hear what's trending for free in the Hi-Pass community</p>
                    </div>

                    <div className="song-grid">
                        <SongGrid songs={this.props.songs} />
                    </div>

                    <div className="explore-trending">
                        <button className="explore-trending-button" onClick={() => dispatch(openModal('login'))}>Explore trending playlists</button>
                    </div>

                    <div className="never-stop-listening-div">
                        <div className="never-stop-listening-img"></div>
                        <div className="never-stop-listening-text">
                            <p className="nsl-header">Never stop listening</p>
                            <div className="nsl-gradient"></div>
                            <p className="nsl-description">Hi-Pass will be available on Web, iOS, Android, Sonos, Chromecast, and Xbox One. Eventually.</p>
                        </div>
                    </div>

                    <div className="creators-div">
                        <div className="creators-img">
                            <div className="creators-text">
                                <p className="creators-header">Calling all creators</p>
                                <p className="creators-description">Get on Hi-Pass to connect with fans, share your sounds, and grow your audience. What are you waiting for?</p>
                                <a href="https://www.linkedin.com/in/chaselim/" target="_blank"><button className="creators-button">Find out more</button></a>
                            </div>
                        </div>
                    </div>

                    <div className="call-to-action-div">
                        <div className="cta-container">
                            <div className="call-to-action-text">
                                <p className="cta-header">Thanks for listening. Now join in.</p>
                                <p className="cta-description">Save tracks, follow artists and build playlists. All for free.</p>
                            </div>
                            <div className="create-acct-button">
                                <button className="cta-create-account-button" onClick={() => dispatch(openModal('signup'))}>Create account</button>
                            </div>
                            <div className="sign-in-button">
                                <p className="already-text">Already have an account?</p>
                                <button className="cta-sign-in-button" onClick={() => dispatch(openModal('login'))}>Sign in</button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomePage;