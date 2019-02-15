import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';


class Player extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            volume: 0.75,
            mute: false
        }
    }

    componentDidMount() {
        const audio = document.querySelector(".html__player");
        const volumeFilled = document.querySelector(".volume__filled");
        audio.addEventListener("timeupdate", this.handleProgress.bind(this));
        audio.addEventListener("timeupdate", this.updateDuration.bind(this));
        window.setPlayState = this.props.setPlayState.bind(this);
        // volumeFilled.addEventListener("volumechange", this.handleVolumeProgress.bind(this));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.paused !== this.props.paused) {
            if (this.props.paused) {
                this.audio.pause();
            } else {
                this.audio.play();
            }
        }
        
        if (!this.props.song) {
            return;
        }

        if ((!prevProps.song && this.props.song) || (prevProps.song.audioURL !== this.props.song.audioURL)) {
            this.audio.play();
            this.props.setPlayState(true);
        }
    }

    handleProgress() {
        const audio = document.querySelector(".html__player");
        const progressBar = document.querySelector(".progress__filled");
        const progressBall = document.querySelector(".progress__ball");

        const percent = audio.currentTime / audio.duration * 100;
        progressBall.style.left = `${percent}%`;
        progressBar.style.width = `${percent}%`;
    }

    updateDuration() {
        const audio = document.querySelector(".html__player");
        const timer = document.querySelector(".time__passed");
        const totalTime = document.querySelector(".total__time");
        const time = audio.currentTime;
        const duration = audio.duration;

        let formattedTime = moment.duration(time, "seconds");
        let formattedDuration = moment.duration(duration, "seconds");
        momentDurationFormatSetup(moment);
        timer.innerHTML = formattedTime.format("mm:ss", { trim: false });
        totalTime.innerHTML = formattedDuration.format("mm:ss", { trim: false });
    }

    seek(e) {
        const audio = document.querySelector(".html__player");
        const duration = audio.duration;

        let el = e.currentTarget;
        let offsetX = 0;
        let mouseX;

        while (el.offsetParent) {
            offsetX += el.offsetLeft;
            el = el.offsetParent;
        }

        mouseX = e.pageX - offsetX;
        const newPercent = mouseX / e.currentTarget.offsetWidth;
        audio.currentTime = duration * newPercent;
    }

    toggleMute() {
        const audio = document.querySelector(".html__player");
        const volIcon = document.querySelector(".volume__icon");
        const volumeFill = document.querySelector(".volume__filled");
        let percent = 0;

        if (this.state.mute) {
            this.setState({ mute: false });
            audio.volume = this.state.volume;

            if (this.state.volume < 0.3) {
                percent = this.state.volume * 100;
            } else if (this.state.volume < 0.5) {
                percent = this.state.volume * 100 - 5;
            } else if (this.state.volume < 0.7) {
                percent = this.state.volume * 100 - 10;
            } else {
                percent = this.state.volume * 100 - 15;
            }

            volumeFill.style.width = `${percent}%`;

            if (this.state.mute || percent <= 0.01) {
                volIcon.classList.remove('fa-volume-up');
                volIcon.classList.add('fa-volume-mute');
            }

            if (this.state.volume <= 0.48 && this.state.volume >= 0.01) {
                if (volIcon.classList.contains("fa-volume-mute")) {
                    volIcon.classList.remove("fa-volume-mute");
                    volIcon.classList.add("fa-volume-down");
                } else {
                    volIcon.classList.remove("fa-volume-up");
                    volIcon.classList.add("fa-volume-down");
                }
            } else if (this.state.volume > 0.48) {
                if (volIcon.classList.contains("fa-volume-mute")) {
                    volIcon.classList.remove("fa-volume-mute");
                    volIcon.classList.add("fa-volume-up");
                } else {
                    volIcon.classList.remove("fa-volume-down");
                    volIcon.classList.add("fa-volume-up");
                }
            }
        } else {
            this.setState({ mute: true });
            audio.volume = 0;
            volumeFill.style.width = '0%';

            if (volIcon.classList.contains('fa-volume-up')) {
                volIcon.classList.remove("fa-volume-up");
            }

            if (volIcon.classList.contains('fa-volume-down')) {
                volIcon.classList.remove("fa-volume-down");
            }

            volIcon.classList.add("fa-volume-mute");
        }
    }

    handleVolume(e) {
        const audio = document.querySelector(".html__player");
        const volumeFill = document.querySelector(".volume__filled");
        const volIcon = document.querySelector(".volume__icon");
        let percent = 0;
        const volume = e.currentTarget.value;
        audio.volume = volume;

        if (volume < 0.3) {
            percent = volume * 100;
        } else if (volume < 0.5) {
            percent = volume * 100 - 5;
        } else if (volume < 0.7) {
            percent = volume * 100 - 10;
        } else {
            percent = volume * 100 - 15;
        }

        volumeFill.style.width = `${percent}%`;

        if (this.state.mute || percent <= 0.01) {
            volIcon.classList.remove('fa-volume-up');
            volIcon.classList.add('fa-volume-mute');
        } 
        
        if (volume <= 0.48 && volume >= 0.01) {
            if (volIcon.classList.contains("fa-volume-mute")) {
              volIcon.classList.remove("fa-volume-mute");
              volIcon.classList.add("fa-volume-down");
            } else {
              volIcon.classList.remove("fa-volume-up");
              volIcon.classList.add("fa-volume-down");
            }
        } else if (volume > 0.48) {
            if (volIcon.classList.contains("fa-volume-mute")) {
                volIcon.classList.remove("fa-volume-mute");
                volIcon.classList.add("fa-volume-up");
            } else {
                volIcon.classList.remove("fa-volume-down");
                volIcon.classList.add("fa-volume-up");
            }
        }

        this.setState({ mute: false, volume: volume });
    }

    render() {
        // if (this.props.song === undefined) return null;
        
        let playOrPause = this.props.paused ? (
            <i className="fa fa-play player-play" />
        ) : (
            <i className="fa fa-pause player-pause" />
        );

        const { song } = this.props;

        let audioSource = song ? song.audioURL : undefined;

        return (
          <div className="player">
            <div className="player-div">
              <audio className="html__player" ref={(audioRef) => this.audio = audioRef} src={audioSource} />

              <div className="player__controls">
                <div className="play__button">
                  <button
                    className="play__pause"
                    onClick={this.props.togglePlayState}
                  >
                    {playOrPause}
                  </button>
                </div>
              </div>

              <div className="progress__container">
                <span className="time__passed">0:00</span>
                <div
                  className="progress"
                  onClick={this.seek.bind(this)}
                >
                  <div className="progress__filled" />
                  <div className="progress__ball" />
                </div>
                <span className="total__time">0:00</span>
              </div>

              <div className="volume__container">
                <i className="fas fa-volume-up volume__icon" onClick={this.toggleMute.bind(this)}/>
                <div className="volume__wrapper">
                    <div className="volume__filled" />
                    <input type="range" min="0.0" max="1.0" onChange={this.handleVolume.bind(this)} value={this.state.mute ? 0 : this.state.volume} step="any" />
                </div>
              </div>
                {   this.props.song
                            ? <div className="player-song-info">
                                <Link className="mini-art-link" to={`/songs/${this.props.song.id}`}>
                                    <div className="mini-album-art" style={{ backgroundImage: `url('${this.props.song.album_art}')` }} />
                                </Link>

                                <div className="player-title-artist">
                                    <p className="pta-artist">{this.props.song.artist}</p>
                                
                                    <Link to={`/songs/${this.props.song.id}`}>
                                        <p className="pta-title">{this.props.song.title}</p>
                                    </Link>
                                </div>
                              </div>
                              
                    : null
                }
            </div>
          </div>
        );
    }
}

export default Player;