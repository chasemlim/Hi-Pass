import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';


class Player extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            song: this.props.song,
            paused: this.props.paused,
            volume: 0.75,
            mute: false
        }
        this.togglePlayPause = this.togglePlayPause.bind(this);
    }

    componentDidMount() {
        const audio = document.querySelector(".html__player");
        audio.addEventListener("timeupdate", this.handleProgress.bind(this));
        audio.addEventListener("timeupdate", this.updateDuration.bind(this));
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

    togglePlayPause() {
        const audio = document.querySelector(".html__player");

        if (this.props.paused === true) {
            audio.play();
            this.props.togglePlayState();
        } else {
            audio.pause();
            this.props.togglePlayState();
        }
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

        if (this.state.mute) {
            this.setState({ mute: false });
            audio.volume = this.state.volume;
        } else {
            this.setState({ mute: true });
            audio.volume = 0;
        }
        volIcon.classList.toggle('fa-volume-up');
        volIcon.classList.toggle('fa-volume-mute');
    }

    render() {
        // if (this.props.song === undefined) return null;
        
        let playOrPause = this.props.paused ? (
            <i className="fa fa-play player-play" />
        ) : (
            <i className="fa fa-pause player-pause" />
        );

        const { song } = this.props;

        let title = null;

        let audioSource = this.props.song ? song.audioURL : undefined;

        return (
          <div className="player">
            <div className="player-div">
              <audio className="html__player" src={audioSource} />

              <div className="player__controls">
                <div className="play__button">
                  <button
                    className="play__pause"
                    onClick={this.togglePlayPause}
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
                <i class="fas fa-volume-up volume__icon" onClick={this.toggleMute.bind(this)}/>
                <input type="range" />
              </div>
            </div>
          </div>
        );
    }
}

export default Player;