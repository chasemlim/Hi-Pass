import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { signup, login, logout } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore();
    const root = document.getElementById('root');

    window.signup = signup;
    window.login = login;
    window.logout = logout;

    ReactDOM.render(<h2>Hello World</h2>, root) 
})