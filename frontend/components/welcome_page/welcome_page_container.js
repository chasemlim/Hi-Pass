import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import WelcomePage from './welcome_page';

const mapStateToProps = (state) => {

    return ({

    })
}

const mapDispatchToProps = (dispatch) => {

    return ({
        
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);