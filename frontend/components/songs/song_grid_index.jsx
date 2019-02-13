import React from 'react';
import SongGrid from './song_grid';

class SongGridIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = { songs: {} }
    }

    componentWillMount() {
        this.props.fetchSongs().then( result => { this.setState({ songs: result.songs }) })
    }

    render() {
        return (
            <ul>
                <SongGrid songs={this.state.songs} />
            </ul>
        );
    }
}

export default SongGridIndex;