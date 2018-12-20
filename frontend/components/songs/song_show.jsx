import React from 'react';
import MainHeaderContainer from '../main_header/main_header_container';

class SongShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.songId);
    }

    render() {
        return (
            <div className="content">
                <MainHeaderContainer />
                <div className="listen-div">

                </div>
            </div>
        ) 
    }
}

export default SongShow;