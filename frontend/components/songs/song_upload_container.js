import { connect } from 'react-redux';

import { createSong } from '../../actions/song_actions';
import SongUpload from './song_upload';

const mapStateToProps = (state) => {

    return ({
        currentUserId: state.session.currentUser
    })
}

const mapDispatchToProps = (dispatch) => {

    return ({
        createSong: (song) => dispatch(createSong(song))
    })
} 

export default connect(mapStateToProps, mapDispatchToProps)(SongUpload);