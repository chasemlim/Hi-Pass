import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeSong, togglePlayState, setPlayState } from '../../actions/player_actions';
import Player from './player';

const mapStateToProps = state => {
    return ({
        paused: state.ui.player.paused,
        currentSongId: state.ui.player.currentSongId,
        song: state.entities.songs[state.ui.player.currentSongId]
    })
}

const mapDispatchToProps = dispatch => {

    return ({
        changeSong: (id) => dispatch(changeSong(id)),
        togglePlayState: () => dispatch(togglePlayState()),
        setPlayState: (playing) => dispatch(setPlayState(playing))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Player));