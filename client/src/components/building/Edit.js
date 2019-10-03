// create.component.js

import React, { Component } from 'react';
import axios from 'axios';
import SuccessComponent from '../handlingMessages/SuccessComponent';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            building_name: '',
            building_description: '',
            building_location: '',
            building_type: '',
            building_price: '',
            building_currency: '',
            success: ''
        }
    }
    componentDidMount() {
        this.setState({ success: "" });
        axios.get('/api/building/edit/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    building_name: response.data.name,
                    building_description: response.data.description,
                    building_location: response.data.location,
                    building_type: response.data.type,
                    building_price: response.data.price,
                    building_currency: response.data.currency
                });
            })
            .catch(function (error) {
                console.log(error);
            })
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

        axios.put('/api/building/update/' + this.props.match.params.id, obj)
            .then(() => this.setState({ success: "Building information updated." }));

        this.props.history.push('/index');
    }

    render() {
        const { success } = this.state;

        if (success) {
            return (
                <SuccessComponent error={success} />
            )
        }
        return (
            <div class="container">
                <h3 className="title">View details</h3>
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
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.building_description}
                            onChange={this.handleInputChange}
                            name="building_description"
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
                    </div>
                    <div className="form-group">
                        <label>Type: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.building_type}
                            onChange={this.handleInputChange}
                            name="building_type"
                        />
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
                        <input type="submit" value="Update Building" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}