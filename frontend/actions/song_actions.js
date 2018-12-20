import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";

export const receiveSongs = songs => ({
    type: RECEIVE_ALL_SONGS,
    songs
})

export const receiveSong = payload => ({
    type: RECEIVE_SONG,
    payload
})

export const removeSong = song => ({
    type: REMOVE_SONG,
    songId: song.id
})

export const fetchSongs = () => (dispatch) => (
    SongApiUtil.fetchSongs().then( songs => dispatch(receiveSongs(songs)))
)

export const fetchSong = (id) => (dispatch) => (
    SongApiUtil.fetchSong(id).then( payload => dispatch(receiveSong(payload)))
)

export const createSong = (song) => (dispatch) => (
    SongApiUtil.createSong(song).then( payload => dispatch(receiveSong(payload)))
)

export const updateSong = (song) => (dispatch) => (
    SongApiUtil.updateSong(song).then( payload => dispatch(receiveSong(payload)))
)

export const deleteSong = (id) => (dispatch) => (
    SongApiUtil.deleteSong(id).then( song => dispatch(removeSong(song)))
)