import React from 'react';
import { Provider } from 'react-redux';
import { 
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import { LoggedInNoRootRoute, NotSlashRoute } from '../util/route_util';

// import WelcomeContainer from './welcome/welcome_container';

import WelcomePageContainer from './welcome_page/welcome_page_container';
import Modal from './modal/modal';
import SongGridIndexContainer from './songs/song_grid_index_container';
import StreamContainer from './stream/stream_container';
import MainHeaderContainer from './main_header/main_header_container';
import SongShowContainer from './songs/song_show_container';
import PlayerContainer from './player/player_container';

const App = () => (
    <main className="main-container">
        <Modal />

    {/* <NotSlashRoute path="cookies" component={ MainHeaderContainer }/> */}

        <div className="main-box">
            <Switch>
                <Route path="/stream" component={ StreamContainer } />
                <LoggedInNoRootRoute exact path="/" component={ WelcomePageContainer } />
                
                <Route path="/songs/:songId" component={ SongShowContainer } />
                {/* <Route exact path = "/" component={ SongGridIndexContainer } /> */}
                <Redirect to="/stream" />
            </Switch>
        </div>
        <PlayerContainer />
    </main>
);

export default App;