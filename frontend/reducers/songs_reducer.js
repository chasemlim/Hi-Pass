import {
    RECEIVE_ALL_SONGS,
    RECEIVE_SONG,
    REMOVE_SONG
} from '../actions/song_actions';

const songsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_ALL_SONGS:
            return action.songs;
        case RECEIVE_SONG:
            newState = Object.assign({}, state, action.payload.songs)
            return newState;
        case REMOVE_SONG:
            newState = Object.assign({}, state);
            delete newState[action.songId];
            return newState;
        default:
            return state;
    }
}

export default songsReducer;