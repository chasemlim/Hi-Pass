import React from 'react';
import { Link } from 'react-router-dom';

class MainHeader extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { display: "" }
        this.dropdown = this.dropdown.bind(this);
    }

    loggedOutNavBar() {
        return (
        <div>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Create account</Link>
            <i className="fas fa-ellipsis-h"></i>
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

    loggedInNavBar() {
        return (
            <div className="main-header">
                <i className="fas fa-bell"></i>

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