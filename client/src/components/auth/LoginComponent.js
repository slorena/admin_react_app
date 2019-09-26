// Login.js

import React, { Component } from 'react';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(user);
    }

    render() {
        return (
            <div className="container">
                <h2 className="title">Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            name="email"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                        />
                        <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            name="password"
                            onChange={this.handleInputChange}
                            value={this.state.password}
                        />
                        <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Login User
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;