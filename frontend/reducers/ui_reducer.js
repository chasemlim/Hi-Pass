import { combineReducers } from 'redux';

import modal from './modal_reducer';
import player from './player_reducer';

export default combineReducers ({
    modal,
    player
});