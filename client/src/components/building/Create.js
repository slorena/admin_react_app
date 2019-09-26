// create.component.js

import React, { Component } from 'react';
import axios from 'axios';
const validateBuildingInput = require("../../validation/building.validation");

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            building_name: '',
            building_description: '',
            building_location: '',
            building_type: '',
            building_price: '',
            building_currency: '',
            errors: {}
        }
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            name: this.state.building_name,
            description: this.state.building_description,
            location: this.state.building_location,
            type: this.state.building_type,
            price: this.state.building_price,
            currency: this.state.building_currency
        };

        const { errors, isValid } = validateBuildingInput(obj);

        // Check validation
        if (!isValid) {
            this.setState({ errors });
            return;
        }

        axios.post('/api/building/create', obj)
            .then(() => { window.location.href = '/index' });

        this.setState({
            building_name: '',
            building_description: '',
            building_location: '',
            building_type: '',
            building_price: '',
            building_currency: ''
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="title">Complete the form</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.building_name}
                            onChange={this.handleInputChange}
                            name="building_name"
                        />
                        <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.business_description}
                            onChange={this.handleInputChange}
                            name="business_description"
                        />
                    </div>
                    <div className="form-group">
                        <label>Location: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.building_location}
                            onChange={this.handleInputChange}
                            name="building_location"
                        />
                        <span style={{ color: "red" }}>{this.state.errors["location"]}</span>
                    </div>
                    <div className="form-group">
                        <label>Type: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.building_type}
                            onChange={this.handleInputChange}
                            name="building_type"
                        />
                        <span style={{ color: "red" }}>{this.state.errors["type"]}</span>
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.building_price}
                            onChange={this.handleInputChange}
                            name="building_price"
                        />
                    </div>
                    <div className="form-group">
                        <label>Currency: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.building_currency}
                            onChange={this.handleInputChange}
                            name="building_currency"
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Building" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}