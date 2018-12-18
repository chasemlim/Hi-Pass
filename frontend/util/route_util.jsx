// const Auth = ({ component: Component, path, loggedIn, exact }) => (
//     <Route path={path} exact={exact} render={(props) => (
//         !loggedIn ? (
//             <Component {...props} />
//         ) : (
//             <Redirect to="/" />
//         )
//     )} />
// );

// const Protected = ({ component: Component, path, loggedIn, exact }) => (
//     <Route path={path} exact={exact} render={(props) => (
//         loggedIn ? (
//             <Component {...props} />
//         ) : (
//             <Redirect to=""
//         )
//     )}
// );

import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// If logged in, can't access root url and redirect to /stream. Put this specifically on root "/"
const LoggedInNoRoot = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/stream" />
        )
    )} />
);

// If the path is root url, don't render. Specifically for main header navbar use
const NotSlash = (props) => {
    return <Route path={props.path} exact={props.exact} render={(props) => (
        (props.location.pathname !== '/') ? <Component {...props} /> : null
    )} />
};

const mapStateToProps = (state) => {
    return { loggedIn: Boolean(state.session.currentUserId)};
}

export const LoggedInNoRootRoute = withRouter(connect(mapStateToProps)(LoggedInNoRoot));
export const NotSlashRoute = withRouter(connect(mapStateToProps)(NotSlash));