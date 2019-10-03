import React, { Component } from "react";

class SuccessComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div class="alert alert-success" role="alert">
                {this.props.success}
            </div>
        );
    }
}

export default SuccessComponent;
