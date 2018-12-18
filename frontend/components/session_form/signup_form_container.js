import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signup, login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return ({
        errors: errors,
        formType: 'signup'
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: () => dispatch(openModal('login')),
        closeModal: () => dispatch(closeModal()),
        demoLogin: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));