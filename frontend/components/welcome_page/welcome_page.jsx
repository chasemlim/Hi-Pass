import React from 'react';
import { Route } from 'react-router-dom';
import SongGrid from '../songs/song_grid';
import WelcomeNavBarContainer from '../welcome_navbar/welcome_navbar_container';

class WelcomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { songs: {} }
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
                            <button className="welcome-upload-own-button">Upload your own</button>
                        </div>
                    </div>

                    <div className="trending-text">
                        <p>Hear what's trending for free in the Hi-Pass community</p>
                    </div>

                    <div className="song-grid">
                        <SongGrid songs={this.state.songs} />
                    </div>

                    <div className="explore-trending">
                        <button className="explore-trending-button">Explore trending playlists</button>
                    </div>

                    <div className="never-stop-listening-div">
                        <div className="never-stop-listening-img"></div>
                        <div className="never-stop-listening-text">
                            <p className="nsl-header">Never stop listening</p>
                            <div className="nsl-gradient"></div>
                            <p className="nsl-description">Hi-Pass will be available on Web, iOS, Android, Sonos, Chromecast, and Xbox One. Eventually.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomePage;