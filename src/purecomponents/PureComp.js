import React, { PureComponent } from "react";

class PureComp extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('Pure render');
        return (
            <h2>Pure component { this.props.name }</h2>
        );
    }

}
export default PureComp;