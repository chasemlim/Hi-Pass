import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const sessionReducer = (state = { currentUserId: null }, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, state, { currentUserId: action.currentUser.id })
            return newState;
        case LOGOUT_CURRENT_USER:
            return { currentUserId: null };
        default:
            return state;
    }
}

export default sessionReducer;