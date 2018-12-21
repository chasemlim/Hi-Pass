import React from 'react';
import { Link } from 'react-router-dom';

class SongGrid extends React.Component {

    render() {
        
        if (this.props.songs.length === 0) return <div></div>;

        return (
            <ul className="grid-ul">
                { Object.values(this.props.songs).map( (song) => {
                    return (
                        <li className="grid-item" key={`${song.id}`}>
                            <Link className="grid-link" to={`/songs/${song.id}`}>
                                <div className="album-art-grid">
                                    <img className="grid-album-art" src={`${song.album_art}`} alt="album-art"/>
                                </div>
                            </Link>
                            <Link className="song-link" to={`/songs/${song.id}`}>
                            <div className="grid-song-div">
                                    <p className="grid-song-title">{song.title}</p>
                            </div>
                            </Link>
                            <div className="grid-link-div">
                                <Link className="grid-link-artist" to={`/users/${song.user_id}`}>
                                    <p className="grid-song-artist">{song.artist}</p>
                                </Link>
                            </div>
                        </li>
                    )
                }) }
            </ul>
        )
    }

}

export default SongGrid;