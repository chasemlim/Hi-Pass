import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = ({ currentUser, logout }) => {
    
    // change later if use modal for Sign Up and Login?
    const loggedOutNavBar = () => (
        <nav> 
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link> 
        </nav>
    );

    const loggedInNavBar = () => (
        // Add a drop down later

        
            <button onClick={logout}>Log Out</button>
    )

    return currentUser ? loggedInNavBar() : loggedOutNavBar();
}

export default MainHeader;