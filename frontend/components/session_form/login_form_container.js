import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ errors, session: { currentUserId } }) => {
    return ({
        errors: errors,
        formType: 'login',
        currentUserId
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: () => dispatch(openModal('signup')),
        closeModal: () => dispatch(closeModal()),
        demoLogin: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));