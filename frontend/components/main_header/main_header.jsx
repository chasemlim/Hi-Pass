import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class MainHeader extends React.Component {
    
    constructor(props) {
        super(props);
        this.dropdown = this.dropdown.bind(this);
    }

    loggedOutNavBar() {
        return (
            <div className="main-header">

                <div className="header-orange-lo">
                    <div className="header-sc-logo-lo"></div>
                    <p className="header-sc-text">HI-PASS</p>
                </div>

                <div className="header-nav-div">
                    <ul>
                        <li>
                            <div>
                                <p>Home</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>Stream</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>Collection</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="header-search-div">
                    <form action="">
                        <input className="header-search-bar" type="search" placeholder="Search for artists, bands, tracks, podcasts" />
                        <i className="fas fa-search header-s-icon"></i>
                    </form>
                </div>

                <div className="header-so-create-div">
                    <button className="header-sign-in" onClick={() => dispatch(openModal('login'))}>Sign in</button>
                    <button className="header-create-account" onClick={() => dispatch(openModal('signup'))}>Create account</button>
                </div>

                <div className="pro-and-upload-so">
                    <div className="pro-upload-div-so">
                        <p className="header-pro-upload-text-so">Upload</p>
                    </div>
                </div>

                <div id="dropdown-div" className="options-dropdown" onClick={this.dropdown}>
                    <i className="fas fa-ellipsis-h options-drop-button-so"></i>
                    <div id="dropdown" className="options-dropdown-content">
                        <button className="logout-button" onClick={this.props.logout}>Sign out</button>
                    </div>
                </div>

            </div>
        );

    };

    dropdown(e) {
        e.preventDefault();

        document.getElementById("dropdown").classList.add("show");
        document.getElementById("dropdown-div").classList.add("show-color");
        let dropdownContent = document.querySelector(".options-dropdown-content");
        document.body.addEventListener('click', (e) => {
            if(e.target.closest(".options-dropdown-content")) return;
            dropdownContent.classList.remove("show");
            document.getElementById("dropdown-div").classList.remove("show-color");
        })
    }

    userDropdown(e) {
        e.preventDefault();

        document.getElementById("user-dropdown").classList.add("user-show");
        document.getElementById("user-dropdown-div").classList.add("show-color");
        let dropdownContent = document.querySelector(".user-dropdown-content");
        document.body.addEventListener('click', (e) => {
            if(e.target.closest(".user-dropdown-content")) return;
            dropdownContent.classList.remove("user-show");
            document.getElementById("user-dropdown-div").classList.remove("show-color");
        })
    }

    loggedInNavBar() {
        return (
            <div className="main-header">

                <div className="header-orange">
                    <div className="header-sc-logo"></div>
                </div>

                <div className="header-nav-div">
                    <ul>
                        <li>
                            <div>
                                <p>Home</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>Stream</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>Collection</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="header-search-div">
                    <form action="">
                        <input className="header-search-bar" type="search" placeholder="Search for artists, bands, tracks, podcasts" />
                        <i className="fas fa-search header-s-icon"></i>
                    </form>
                </div>

                <div className="pro-and-upload">
                    <div className="pro-upload-div pro">
                        <p className="header-pro-upload-text">Try Pro</p>
                        
                        <span className="coming-soon-text">Coming soon!</span>
                    </div>

                    <div className="pro-upload-div">
                        <p className="header-pro-upload-text">Upload</p>
                    </div>
                </div>

                <div id="user-dropdown-div" className="user-dropdown" onClick={this.userDropdown}>
                    <div className="round-profile-pic"></div>
                    <p className="username">{this.props.currentUser.username}</p>
                    <div className="arrow-icon">
                        <i className="fas fa-angle-down arrow"></i>
                    </div>
                    <div id="user-dropdown" className="user-dropdown-content">
                        <div className="profile-tab">
                            <i className="fas fa-user-alt profile-button"></i>
                            <p className="profile-text">Profile</p>
                        </div>

                    </div>
                </div>

                <div className="notif-icon">
                    <i className="fas fa-bell notif-icon-button"></i>
                </div>
                <div className="mail-icon">
                    <i className="fas fa-envelope mail-icon-button"></i>
                </div>
                <div id="dropdown-div" className="options-dropdown" onClick={this.dropdown}>
                    <i className="fas fa-ellipsis-h options-drop-button"></i>
                    <div id="dropdown" className="options-dropdown-content">
                        <button className="logout-button" onClick={this.props.logout}>Sign out</button>
                    </div>
                </div>

            </div>
        )

    }

    render() {
        return this.props.currentUser ? this.loggedInNavBar() : this.loggedOutNavBar();
    }
}

export default MainHeader;