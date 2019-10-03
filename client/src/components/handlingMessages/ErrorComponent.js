import React, { Component } from "react";

class ErrorComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div class="alert alert-danger" role="alert">
                {this.props.error}
            </div>
        );
    }
}

export default ErrorComponent;
