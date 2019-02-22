import React from 'react';
import { Link } from 'react-router-dom';

class SongIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = { songs: {} }
        this.switchIcon = this.switchIcon.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.props.fetchSongs().then( result => { this.setState({ songs: result.songs }) });
    }

    switchIcon(button, paused) {
        if (paused) {
            button.classList.remove("fa-play");
            button.classList.add("fa-pause")
        } else {
            button.classList.remove("fa-pause");
            button.classList.add("fa-play");
        }
    }

    handleClick(id) {
        return(() => {
            if (id === this.props.currentSongId) {
                this.props.togglePlayState();
            } else {
                this.props.fetchSong(id)
                    .then(() => this.props.changeSong(id));
            }
        })
    }

    render() {
        return(
            <div className="main-box">
                <div className="stream-div">
                    <div className="stream-content">
                        <p className="stream-header">Hear the latest posts from the people you're following:</p>

                        <ul className="stream-ul">
                            {
                                Object.values(this.state.songs).map(song => {

                                    const playIcon = !this.props.paused && (song.id === this.props.currentSongId) ? 'fa-pause' : 'fa-play';

                                    return (
                                        <li className="stream-song" key={`${song.id}`}>
                                            <Link className="stream-aa-link" to={`/songs/${song.id}`}>
                                                <div className="stream-album-art">
                                                    <img src={`${song.album_art}`} alt="stream-album-art" />
                                                </div>
                                            </Link>

                                            <div className="stream-song-details">
                                                <div className="ssd-header">
                                                    <div className="stream-play-button" onClick={this.handleClick(song.id)}>
                                                        <i id="button" className={`fas ${playIcon} stream-button`}></i>
                                                    </div>

                                                    <div className="ssd-text">
                                                        <Link to="#">
                                                            <p className="ssd-artist">{song.artist}</p>
                                                        </Link>
                                                        <Link to={`/songs/${song.id}`}>
                                                            <p className="ssd-title">{song.title}</p>
                                                        </Link>

                                                    </div>

                                                    <div className="ssd-tag">
                                                        <p className="ssd-genre"># {song.genre}</p>
                                                    </div>
                                                </div>

                                                <div className="sample-waveform" />

                                                <div className="ssd-buttons">
                                                    <div className="ssd-buttons-div">
                                                        <button className="ssd-show-buttons ssd-like-b">0</button>
                                                        <button className="ssd-show-buttons ssd-repost-b">0</button>
                                                        <button className="ssd-show-buttons ssd-share-b">Share</button>
                                                        <button className="ssd-show-buttons ssd-more-b">More</button>
                                                    </div>

                                                    <div className="ssd-playcount">
                                                        <span className="playcount">0</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="self-links">
                        <a href="https://www.linkedin.com/in/chaselim/" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/chasemlim" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="https://neocolor.bandcamp.com/" target="_blank"><i class="fab fa-bandcamp"></i></a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default SongIndex;