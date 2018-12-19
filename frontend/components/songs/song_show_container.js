import { connect } from 'react-redux';

import { fetchSong, updateSong, deleteSong } from '../../actions/song_actions';
import SongShow from './song_show';

const mapStateToProps = (state) => {

    return ({
        currentUserId: state.session.currentUser
    })
}

const mapDispatchToProps = (dispatch) => {

    return ({
        fetchSong: (id) => dispatch(fetchSong(id)),
        updateSong: (song) => dispatch(updateSong(song)),
        deleteSong: (id) => dispatch(deleteSong(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SongShow);