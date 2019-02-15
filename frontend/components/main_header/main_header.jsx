import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class MainHeader extends React.Component {
    
    constructor(props) {
        super(props);
        this.dropdown = this.dropdown.bind(this);
        this.attached = false;
        this.userAttached = false;
        this.handleLogOut = this.handleLogOut.bind(this);
        this.handleHome = this.handleHome.bind(this);
    }

    loggedOutNavBar() {
        return (
            <div className="main-header">

                <div className="header-content">
                
                <Link to="/stream">
                    <div className="header-orange-lo">              
                        <div className="header-sc-logo-lo"></div>
                        <p className="header-sc-text">HI-PASS</p>
                    </div>
                </Link>

                <div className="header-nav-div">
                    <ul>
                        <li>
                            <Link to="/">
                                <div>
                                    <p>Home</p>
                                </div>
                            </Link> 
                        </li>
                        <li>
                            <Link to="/stream">
                                <div>
                                    <p>Stream</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <div className="un">
                                <p>Collection</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="header-search-div un">
                    <form action="">
                        <input className="header-search-bar un" type="search" placeholder="Search for artists, bands, tracks, podcasts" />
                        <i className="fas fa-search header-s-icon un"></i>
                    </form>
                </div>

                <div className="header-so-create-div">
                    <button className="header-sign-in" onClick={() => dispatch(openModal('login'))}>Sign in</button>
                    <button className="header-create-account" onClick={() => dispatch(openModal('signup'))}>Create account</button>
                </div>

                <div className="pro-and-upload-so un">
                    <div className="pro-upload-div-so un">
                        <p className="header-pro-upload-text-so un">Upload</p>
                    </div>
                </div>

                <div id="dropdown-div" className="options-dropdown un" onClick={this.dropdown}>
                    <i className="fas fa-ellipsis-h options-drop-button-so un"></i>
                    {/* <div id="dropdown" className="options-dropdown-content">
                        <a href="https://www.linkedin.com/in/chase-lim-64aba5127/">LinkedIn</a>
                    </div> */}
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
            if (e.target.closest(".options-dropdown-content")) return;
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
            if (e.target.closest(".user-dropdown-content")) return;
            dropdownContent.classList.remove("user-show");
            document.getElementById("user-dropdown-div").classList.remove("show-color");
        })
    }

    handleLogOut(e) {
        e.preventDefault();
        this.props.logout().then(() => this.props.history.push('/'));
    }

    handleHome(e) {
        e.preventDefault();
        this.props.history.push('/stream');
    }

    loggedInNavBar() {
        return (
            <div className="main-header">
                <div className="header-content">
                    <Link to="/stream">
                        <div className="header-orange">
                            <div className="header-sc-logo"></div>
                        </div>
                    </Link>

                    <div className="header-nav-div">
                        <ul>
                            <li>
                                <Link to="/">
                                    <div>
                                        <p>Home</p>
                                    </div>
                                </Link> 
                            </li>
                            <li>
                                <Link to="/stream">
                                    <div>
                                        <p>Stream</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <div className="un">
                                    <p>Collection</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="header-search-div un">
                        <form action="">
                            <input className="header-search-bar un" type="search" placeholder="Search for artists, bands, tracks, podcasts" />
                            <i className="fas fa-search header-s-icon un"></i>
                        </form>
                    </div>

                    <div className="pro-and-upload">
                        <div className="pro-upload-div pro">
                            <p className="header-pro-upload-text">Try Pro</p>
                        </div>

                        <div className="pro-upload-div un">
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
                                <p className="profile-text un">Profile</p>
                            </div>

                        </div>
                    </div>

                    <div className="notif-icon un">
                        <i className="fas fa-bell notif-icon-button un"></i>
                    </div>
                    <div className="mail-icon un">
                        <i className="fas fa-envelope mail-icon-button un"></i>
                    </div>
                    <div id="dropdown-div" className="options-dropdown" onClick={this.dropdown}>
                        <i className="fas fa-ellipsis-h options-drop-button"></i>
                        <div id="dropdown" className="options-dropdown-content">
                            <button className="logout-button" onClick={this.handleLogOut}>Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    render() {
        return this.props.currentUser ? this.loggedInNavBar() : this.loggedOutNavBar();
    }
}

export default withRouter(MainHeader);