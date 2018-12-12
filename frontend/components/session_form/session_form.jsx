import React from 'react';

class SessionForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { username: "", email: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isolateUsername = this.isolateUsername.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
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
        this.props.action(this.state).then(this.props.history.push("/"));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                {this.renderErrors()}
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Email:
                            <input type="email" value={this.state.email} onChange={this.updateEmail} />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input type="password" value={this.state.password} onChange={this.update("password")} />
                        </label>
                        <br />
                        <input type="submit" value={this.props.formType} />
                    </form>
                </div>
            </div>

        )
    }
}

export default SessionForm;