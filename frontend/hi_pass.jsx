import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { signup, login, logout } from "./actions/session_actions";
import { fetchSongs, fetchSong, createSong, updateSong, deleteSong } from "./actions/song_actions";

document.addEventListener("DOMContentLoaded", () => {
    let store;

    if (window.currentUser) {
        
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    };

    const root = document.getElementById('root');

    window.signup = signup; 
    window.login = login;
    window.logout = logout;

    window.fetchSongs = fetchSongs;
    window.fetchSong = fetchSong;
    window.createSong = createSong;
    window.updateSong = updateSong;
    window.deleteSong = deleteSong;

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root);
});