import React from 'react';
import MainHeaderContainer from '../main_header/main_header_container';
import Player from '../player/player_container';

class SongShow extends React.Component {

    constructor(props) {
        super(props);
        this.switchIcon = this.switchIcon.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const { song } = this.props;

        if(!song) this.props.fetchSong(this.props.match.params.songId);
    }

    switchIcon() {
        let button = document.getElementById("button");

        if (button.classList.contains("fa-play")) {
            button.classList.remove("fa-play");
            button.classList.add("fa-pause")
        } else if (button.classList.contains("fa-pause")) {
            button.classList.remove("fa-pause");
            button.classList.add("fa-play");
        }
    }

    handleClick(e) {
        e.preventDefault();
        this.switchIcon();
        this.props.changeSong(this.props.song.id);

        const audio = document.querySelector(".html__player");

        setTimeout(() =>
        {if (this.props.paused === true) {
            audio.play();
            this.props.togglePlayState();
        } else {
            audio.pause();
            this.props.togglePlayState();
        }}, 500
        )
    }

    render() {

        if (!this.props.song) return <div></div>; 

        return (
            <div className="content">
                <MainHeaderContainer />
                <div className="listen-div">
                    <div className="left-listen">
                        <div className="song-info">
                            <div className="play-button" onClick={this.handleClick}>
                                <i id="button" className="fas fa-play button" ></i>
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
                    <div className="album-art"></div>
                </div>

                <div className="show-bottom-half">
                    <div className="info-div">
                        <div className="comment-and-buttons">
                            <div className="comment">
                                <div className="commenter-pic"></div>
                                <form action="">
                                    <input className="comment-form" type="text" placeholder="Write a comment" />
                                </form> 
                            </div>

                            <div className="buttons">
                                <button className="show-buttons like-b">Like</button>
                                <button className="show-buttons repost-b">Repost</button>
                                <button className="show-buttons share-b">Share</button>
                                <button className="show-buttons more-b">More</button>
                            </div>
                        </div>
                    </div>

                    <div className="profile-and-description">
                        <div className="profile-div">
                            <div className="show-profile-pic"></div>
                            <p className="show-username">{this.props.song.artist}</p>
                            <div className="followers-and-tracks">
                                <p className="show-follower-count">17</p>
                                <p className="show-tracks-count">6</p>
                            </div>
                            <button className="show-follow-button">Follow</button>
                        </div>

                        <div className="description-div">
                            <p>{this.props.song.description}sample text until its not null</p>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default SongShow;