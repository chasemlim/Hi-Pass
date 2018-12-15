import React from 'react';
import { Link } from 'react-router-dom';

class SongGrid extends React.Component {

    render() {
        return (
            <ul className="grid-ul">
                { Object.values(this.props.songs).map( (song) => {
                    return (
                        <li className="grid-item" key={`${song.id}`}>
                            <Link className="grid-link" to={`/songs/${song.id}`}>
                                <div className="album-art-grid">
                                    {// logic for album art goes here 
                                    }
                                </div>
                            </Link>
                            <Link to={`/songs/${song.id}`}>
                            <div className="grid-song-div">
                                    <p className="grid-song-title">{song.title}</p>
                            </div>
                            </Link>
                            <div className="grid-link-div">
                                <Link className="grid-link" to={`/users/${song.user_id}`}>
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