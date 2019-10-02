import React, { Component } from "react";
import Locations from '../building/Locations';

import GoogleMapReact from 'google-map-react';
class Landing extends Component {
  render() {
    return (

      <div id="app" className="container">
        <h4>Welcome</h4>
        <p className="flow-text grey-text text-darken-1">
          Manage multiple buildings
        </p>
        <Locations />
      </div>

    );
  }
}

export default Landing;
