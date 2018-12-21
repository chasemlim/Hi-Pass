export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const SONG_PLAY_STATE = "SONG_PLAY_STATE";

export const changeSong = id => ({
    type: RECEIVE_CURRENT_SONG,
    songId: id
})

export const togglePlayState = () => ({
    type: SONG_PLAY_STATE
})