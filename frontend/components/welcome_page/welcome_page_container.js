import { connect } from 'react-redux';
import WelcomePage from './welcome_page';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = (state) => {

    return ({
        songs: state.entities.songs
    })
}

const mapDispatchToProps = (dispatch) => {

    return ({
        fetchSongs: () => dispatch(fetchSongs())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);