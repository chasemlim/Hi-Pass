import { connect } from 'react-redux';

import { fetchSongs } from '../../actions/song_actions';
import SongGridIndex from './song_grid_index';

const mapStateToProps = (state) => {

    return ({
        currentUserId: state.session.currentUser,
        songs: state.entities.songs,
        users: state.entities.users
    })
}

const mapDispatchToProps = (dispatch) => {

    return ({
        fetchSongs: () => dispatch(fetchSongs())
    })
} 

export default connect(mapStateToProps, mapDispatchToProps)(SongGridIndex);