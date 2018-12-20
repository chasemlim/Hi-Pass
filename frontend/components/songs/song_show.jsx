import React from 'react';
import MainHeaderContainer from '../main_header/main_header_container';

class SongShow extends React.Component {

    constructor(props) {
        super(props);
        this.switchIcon = this.switchIcon.bind(this);
    }

    componentDidMount() {
        const { song } = this.props;

        if(!song) this.props.fetchSong(this.props.match.params.songId);
    }

    switchIcon(e) {
        e.preventDefault();
        let button = document.getElementById("button");

        if (button.classList.contains("fa-play")) {
            button.classList.remove("fa-play");
            button.classList.add("fa-pause")
        } else if (button.classList.contains("fa-pause")) {
            button.classList.remove("fa-pause");
            button.classList.add("fa-play");
        }
    }

    render() {

        if (!this.props.song) return <div></div>; 

        return (
            <div className="content">
                <MainHeaderContainer />
                <div className="listen-div">
                    <div className="left-listen">
                        <div className="song-info">
                            <div className="play-button" onClick={this.switchIcon}>
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

                <div className="info-div">

                </div>
            </div>
        ) 
    }
}

export default SongShow;