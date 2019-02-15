import React from 'react';
import MainHeaderContainer from '../main_header/main_header_container';

class SongShow extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.songId);
    }

    handleClick() {
        if (this.props.song.id === this.props.currentSongId) {
            this.props.togglePlayState();
        } else {
            this.props.changeSong(this.props.song.id);
        }
    }

    render() {
        if (!this.props.song) return null; 
        if (!this.props.songUploader) return null; 

        const playIcon = (this.props.song.id === this.props.currentSongId) && !this.props.paused ? 'fa-pause' : 'fa-play';

        return (
            <div className="content">
                <MainHeaderContainer />
                <div className="listen-div">
                    <div className="left-listen">
                        <div className="song-info">
                            <div className="play-button" onClick={this.handleClick}>
                                <i id="button" className={`fas ${playIcon} button`} ></i>
                            </div>
                            <div className="artist-and-song">
                                <p className="artist-name">{this.props.song.artist}</p>
                                <p className="song-name">{this.props.song.title}</p>
                            </div>
                            <div className="date-and-genre">
                                <p className="date">1 day ago</p>
                                <p className="genre"># {this.props.song.genre}</p>
                            </div>
                        </div>
                        <div className="waveform"></div>
                    </div>
                    <div className="album-art" style={{ backgroundImage: `url("${this.props.song.album_art}")`}}></div>
                </div>

                <div className="show-bottom-half">
                    <div className="info-div">
                        <div className="comment-and-buttons">
                            <div className="comment">
                                <div className="commenter-pic"></div>
                                <form action="">
                                    <input className="comment-form un" type="text" placeholder="Write a comment" />
                                </form> 
                            </div>

                            <div className="buttons">
                                <button className="show-buttons like-b un">Like</button>
                                <button className="show-buttons repost-b un">Repost</button>
                                <button className="show-buttons share-b un">Share</button>
                                <button className="show-buttons more-b un">More</button>
                            </div>
                        </div>
                    </div>

                    <div className="profile-and-description">
                        <div className="profile-div">
                            <div className="show-profile-pic" style={{ backgroundImage: `url("${this.props.songUploader.avatar}")` }}></div>
                            <p className="show-username">{this.props.song.artist}</p>
                            <div className="followers-and-tracks">
                                <p className="show-follower-count">17</p>
                                <p className="show-tracks-count">6</p>
                            </div>
                            <button className="show-follow-button un">Follow</button>
                        </div>

                        <div className="description-div">
                            <p>{this.props.song.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default SongShow;