import { connect } from 'react-redux';

import { fetchSong, fetchSongs } from '../../actions/song_actions';
import SongIndex from './song_index';
import { changeSong, togglePlayState } from '../../actions/player_actions';

const mapStateToProps = (state) => {

    return ({
        currentUserId: state.session.currentUser,
        songs: state.entities.songs,
        users: state.entities.users
    })
}

const mapDispatchToProps = (dispatch) => {

    return ({
        fetchSong: (id) => dispatch(fetchSong(id)),
        fetchSongs: () => dispatch(fetchSongs()),
        changeSong: (id) => dispatch(changeSong(id)),
        togglePlayState: () => dispatch(togglePlayState())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);