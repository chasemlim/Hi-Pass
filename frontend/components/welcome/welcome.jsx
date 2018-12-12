import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ currentUser, logout }) => {
    
    // change later if use modal for Sign Up and Login?
    const sessionLinks = () => (
        <nav> 
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link> 
        </nav>
    );

    const profileDropDown = () => (
        // Add a drop down later
        <hgroup>
            <button onClick={logout}>Log Out</button>
        </hgroup>
    )

    return currentUser ? profileDropDown() : sessionLinks();
}

export default Welcome;