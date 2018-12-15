import React from 'react';
import { Provider } from 'react-redux';
import { 
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import WelcomeContainer from './welcome/welcome_container';

import WelcomeNavBarContainer from './welcome_navbar/welcome_navbar_container';
import WelcomePageContainer from './welcome_page/welcome_page_container';
import Modal from './modal/modal';
import SongIndexContainer from './songs/song_index_container';

const App = () => (
    <main className="main-container">
        <Modal />
        <div className="main-box">
            <WelcomeNavBarContainer />
            <WelcomePageContainer />
            <Switch>
                <Route path="users/:username/:song_id" />
                {/* <Route exact path = "/" component={ SongIndexContainer } /> */}
                <Redirect to="/" />
            </Switch>
        </div>
    </main>
);

export default App;