import React from 'react';

class SessionForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { username: "", email: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isolateUsername = this.isolateUsername.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    updateEmail(e) {
        e.preventDefault();
        let email = e.target.value
        let username = this.isolateUsername(email);
        this.setState({ username: username, email: email })
    }

    isolateUsername(email) {
        let username = "";
        for (let i = 0; i < email.length; i++) {
            if (email[i] === "@") {
                return username;
            } else {
                username += email[i];
            }
        }
        return "";
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
            .then(
                () => {
                    this.props.history.push("/");
                    this.props.closeModal();
                });
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        let user = { username: "NeocolorMusic", email: "neocolormusic@gmail.com", password: "password" }
        this.props.demoLogin(user)
            .then(
                () => {
                    this.props.history.push("/");
                    this.props.closeModal();
                });
    }

    switchForm(e) {
        e.preventDefault();
        this.props.otherForm();
    }

    renderErrors() {
        return (
            <div className="errors-div">
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li className="error" key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <div className="modal-body">
                    {this.renderErrors()}
                    <div className="modal-sc-logo"></div>
                        <form onSubmit={this.handleSubmit}>

                        <input className="modal-email" type="email" value={this.state.email} placeholder="Your email address" onChange={this.updateEmail} />

                            <br />

                        <input className="modal-password" type="password" value={this.state.password} placeholder="Your password" onChange={this.update("password")} />

                            <br />
                            <input className="modal-submit" type="submit" value={this.props.formType === 'login' ? 'Log In' : 'Create Account'} />
                        </form>
                        <div className="modal-line"></div>
                        <div className="modal-or">
                            <h2 className="modal-or-text">or</h2>
                        </div>
                        
                        <div className="modal-bottom-div">
                            <button className="modal-change-form" onClick={(e) => this.switchForm(e)}>{this.props.formType === 'login' ? 'Create account' : 'Sign in'}</button>
                        </div>

                        <div className="modal-demo">
                            <button className="modal-demo-button" onClick={this.handleDemoSubmit}>Demo Login</button>
                        </div>

                        <div className="modal-disclaimer">
                        <p>Hi-Pass is a portfolio site and not meant for commercial use. No personal information is collected or required. For any questions or concerns, <a href="https://www.linkedin.com/in/chase-lim-64aba5127/">Click Here</a>.</p>
                        </div>
                </div> 
            </div>
        )
    }
}

export default SessionForm;