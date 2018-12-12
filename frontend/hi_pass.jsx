import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { signup, login, logout } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore();
    const root = document.getElementById('root');

    window.signup = signup; // for testing session_api_util functions
    window.login = login;
    window.logout = logout;

    window.getState = store.getState;
    window.dispatch = store.dispatch; // for testing

    ReactDOM.render(<Root store={store} />, root) 
})