import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";

export const receiveSongs = songs => ({
    type: RECEIVE_ALL_SONGS,
    songs
})

export const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
})

export const removeSong = id => ({
    type: REMOVE_SONG,
    songId: id
})

export const fetchSongs = () => (dispatch) => (
    SongApiUtil.fetchSongs().then( songs => dispatch(receiveSongs(songs)))
)

export const fetchSong = (id) => (dispatch) => (
    SongApiUtil.fetchSong(id).then( song => dispatch(receiveSong(song)))
)

export const createSong = (song) => (dispatch) => (
    SongApiUtil.createSong(song).then( song => dispatch(receiveSong(song)))
)

export const updateSong = (song) => (dispatch) => (
    SongApiUtil.updateSong(song).then( song => dispatch(receiveSong(song)))
)

export const deleteSong = (id) => (dispatch) => (
    SongApiUtil.deleteSong(id).then( song => dispatch(removeSong(song)))
)