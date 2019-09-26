// Register.js

import React, { Component } from 'react';
import axios from 'axios';
const validateRegisterInput = require('../../validation/register');

class Register extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConf: '',
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
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            passwordConf: this.state.passwordConf
        }
        const { errors, isValid } = validateRegisterInput(user);

        if (!isValid) {
            this.setState({ errors });
            return;
        }
        axios.post('/api/user/register', user)
            .then(() => { window.location.href = '/index' });

        console.log(user);
    }

    render() {
        return (
            <div className="container">
                <h2 className="title">Registration</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name"
                            className="form-control"
                            name="username"
                            onChange={this.handleInputChange}
                            value={this.state.username}
                        />
                        <span style={{ color: "red" }}>{this.state.errors["username"]}</span>
                    </div>
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
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="form-control"
                            name="passwordConf"
                            onChange={this.handleInputChange}
                            value={this.state.passwordConf}
                        />
                        <span style={{ color: "red" }}>{this.state.errors["passwordConf"]}</span>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Register User
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;