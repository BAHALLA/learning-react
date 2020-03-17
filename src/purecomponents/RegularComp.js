import React, { Component } from "react";

class RegularComp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('Regular render');
        return (
            <h2>Regular component { this.props.name }</h2>
        );
    }

}

export default RegularComp;