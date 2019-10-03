import React, { Component } from 'react';

class Marker extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { alt, onClick } = this.props;
        return <div className="marker" alt={alt} onClick={() => onClick && onClick()} />
    }
}

export default Marker;