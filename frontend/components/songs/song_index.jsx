import React from 'react';
import { Link } from 'react-router-dom';

class SongIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = { songs: {} }
    }

    componentWillMount() {
        this.props.fetchSongs().then( result => { this.setState({ songs: result.songs }) });
    }

    render() {
        return(
            <div className="main-box">
                <div className="stream-content">
                    <p className="stream-header">Hear the latest posts from the people you're following:</p>

                    <ul className="stream-ul">
                        {
                            Object.values(this.state.songs).map( song => {
                                return (
                                    <li className="stream-song" key={`${song.id}`}>
                                        <Link className="stream-aa-link" to={`/songs/${song.id}`}>
                                            <div className="stream-album-art">
                                                <img src={`${song.album_art}`} alt="stream-album-art"/>
                                            </div>
                                        </Link>
                                        
                                        <div className="stream-song-details">
                                            <div className="ssd-header">
                                                <div className="stream-play-button" onClick={this.handleClick}>
                                                    <i id="button" className="fas fa-play stream-button" ></i>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default SongIndex;