import React, { Component } from 'react';
import axios from 'axios';
import MapComponent from '../map/MapComponent';
import ErrorComponent from '../handlingMessages/ErrorComponent';
import LoadingComponent from '../loading/LoadingComponent';


export default class Locations extends Component {

    constructor(props) {
        super(props);
        this.state = { buildings: [], loading: true, error: '' };
    }

    componentDidMount() {
        this.fetchBuildings();
    }

    fetchBuildings = () => {
        // put  component in loading state and clear error, if exists
        this.setState({ loading: true, error: "" })

        axios.get('/api/building/location')
            .then(response => {
                this.setState({ buildings: response.data, loading: false, error: '' });
            })
            .catch(function (error) {
                this.setState({ buildings: [], loading: false, error: error })
            })
    }

    render() {
        const { loading, error } = this.state;

        if (loading) {
            return (
                <LoadingComponent />
            )
        }

        if (error) {
            return (
                <ErrorComponent error={error} />
            )
        }

        return (
            <MapComponent markers={this.state.buildings} />
        );
    }
}