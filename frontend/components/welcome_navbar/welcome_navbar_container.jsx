import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import WelcomeNavBar from './welcome_navbar.jsx';

const mapStateToProps = (state) => {

    return ({

    })
}

const mapDispatchToProps = (dispatch) => {

    return ({
        
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeNavBar);