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
import SongIndexContainer from './songs/song_index_container';
import StreamContainer from './stream/stream_container';
import MainHeaderContainer from './main_header/main_header_container';

const App = () => (
    <main className="main-container">
        <Modal />

    <NotSlashRoute path="cookies" component={ MainHeaderContainer }/>

        <div className="main-box">
            <Switch>
                <Route path="/stream" component={ StreamContainer } />
                <LoggedInNoRootRoute path="/" component={ WelcomePageContainer } />

                <Route path="users/:username/:song_id" />
                {/* <Route exact path = "/" component={ SongIndexContainer } /> */}
                <Redirect to="/stream" />
            </Switch>
        </div>
    </main>
);

export default App;