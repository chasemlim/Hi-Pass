import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SONG } from '../actions/song_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
            return newState;
        case RECEIVE_SONG:
            newState = Object.assign({}, state, action.payload.users);
            return newState;
        default:
            return state;
    }
}

export default usersReducer;