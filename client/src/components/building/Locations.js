import React, { Component } from 'react';
import axios from 'axios';
import MapComponent from '../map/MapComponent';
import ErrorComponent from '../handlingMessages/ErrorComponent';
import LoadingComponent from '../loading/LoadingComponent';
import Utils from "../../utils.js";

export default class Locations extends Component {

    constructor(props) {
        super(props);
        this.state = { buildings: [], userLocation: { lat: 32, lng: 32 }, loading: true, error: '' };
    }

    componentDidMount() {
        this.getUserLocation(this.fetchBuildings);
    }
    getUserLocation = (callback) => {
        this.setState({ loading: true, error: "" })
        
        Utils.getPosition().then((position) => {
            const { latitude, longitude } = position.coords;
            this.setState({
                userLocation: { lat: latitude, lng: longitude }
            });
            callback();
        }).catch(() => callback())
    }
    fetchBuildings = () => {
        const { lat, lng } = this.state.userLocation;
        
        axios.get('/api/building/location', { params: { lat: lat, lng: lng } })
            .then(response => {
                this.setState({ buildings: response.data, loading: false, error: '' });
            })
            .catch(error => {
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