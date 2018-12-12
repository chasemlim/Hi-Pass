import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
        debugger;
            newState = Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
            return newState;
        default:
            return state;
    }
}

export default usersReducer;