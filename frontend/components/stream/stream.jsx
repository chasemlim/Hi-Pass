import React from 'react';

import MainHeaderContainer from '../main_header/main_header_container';
import SongIndex from '../songs/song_index_container';

class Stream extends React.Component {

    render() {
        return (
            <div className="content">
                <MainHeaderContainer />
                <SongIndex />
            </div>

        );
    }
}

export default Stream;