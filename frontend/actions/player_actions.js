export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const SONG_PLAY_STATE = "SONG_PLAY_STATE";
export const SET_PLAY_STATE = "SET_PLAY_STATE";

export const changeSong = id => ({
    type: RECEIVE_CURRENT_SONG,
    songId: id
})

export const togglePlayState = () => ({
    type: SONG_PLAY_STATE
})

export const setPlayState = playing => ({
    type: SET_PLAY_STATE,
    playing
})