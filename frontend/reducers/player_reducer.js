import { 
    SONG_PLAY_STATE,
    RECEIVE_CURRENT_SONG
 } from '../actions/player_actions';

let initialState = { paused: true, currentSongId: null }

 const playerReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case SONG_PLAY_STATE:
            newState = Object.assign({}, state, { paused: !state.paused })
            return newState;
        case RECEIVE_CURRENT_SONG:
            newState = Object.assign({}, state, { currentSongId: action.songId })
            return newState;
        default:
            return state;
    }

 }

 export default playerReducer;