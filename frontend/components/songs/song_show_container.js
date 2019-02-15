import { connect } from 'react-redux';

import { fetchSong, updateSong, deleteSong } from '../../actions/song_actions';
import SongShow from './song_show';
import { changeSong, togglePlayState } from '../../actions/player_actions';

const mapStateToProps = (state, ownProps) => {
    let songUploader;
    if (state.entities.songs[ownProps.match.params.songId] !== undefined) {
        songUploader = state.entities.users[state.entities.songs[ownProps.match.params.songId].user_id];
    }
    return ({
        currentUser: state.entities.users[state.session.currentUserId],
        song: state.entities.songs[ownProps.match.params.songId],
        paused: state.ui.player.paused,
        songUploader: songUploader,
        currentSongId: state.ui.player.currentSongId
    })
}

const mapDispatchToProps = (dispatch) => {

    return ({
        fetchSong: (id) => dispatch(fetchSong(id)),
        updateSong: (song) => dispatch(updateSong(song)),
        deleteSong: (id) => dispatch(deleteSong(id)),
        changeSong: (id) => dispatch(changeSong(id)),
        togglePlayState: () => dispatch(togglePlayState())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SongShow);