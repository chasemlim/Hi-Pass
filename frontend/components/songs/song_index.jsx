import React from 'react';

class SongIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = { songs: {} }
    }

    componentWillMount() {
        this.props.fetchSongs().then( result => { this.setState({ songs: result.songs }) });
    }

    render() {
        return(
            <div className="main-box">
                <div className="stream-content">
                    <p className="stream-header">Hear the latest posts from the people you're following:</p>
                </div>
            </div>
        )
    }
}

export default SongIndex;