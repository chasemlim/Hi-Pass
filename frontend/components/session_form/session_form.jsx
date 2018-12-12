import React from 'react';

class SessionForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { username: "", email: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
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
    }
    // CANT LOG IN ON LOCALHOST:3000
    handleSubmit(e) {
        e.preventDefault();
        let username = this.isolateUsername(this.state.email) // Isolates the first part of their email to 
        this.setState({ username: username });                // use as their username
        const user = Object.assign({}, this.state);
        this.props.action(user);
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
                            <input type="email" value={this.state.email} onChange={this.update("email")} />
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