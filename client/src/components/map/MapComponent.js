import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { userLocation: { lat: 32, lng: 32 }, loading: true };
    }
    getUserLocation() {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;

                this.setState({
                    userLocation: { lat: latitude, lng: longitude },
                    loading: false
                });
            },
            () => {
                this.setState({ loading: false });
            }
        );
    }
    componentDidMount() {
        this.getUserLocation()

    }
    getMarkers() {
        return this.props.markers.map(function (object, i) {
            return <Marker
                lat={object.geoLocation.coordinates[1]}
                lng={object.geoLocation.coordinates[0]}
                text={object.location}
                key={i}
            />
        });
    }
    render() {
        const { loading, userLocation } = this.state;
        if (loading) {
            return null;
        }
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    apiKey="API_KEY"
                    center={userLocation}
                    zoom={3}
                >
                    {this.getMarkers()}

                </GoogleMapReact>
            </div>
        );
    }
}
export default MapComponent;