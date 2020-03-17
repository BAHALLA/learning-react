import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: 'Parent'
        };
    }

    greetParent = (childName) => {
        // template literals
      alert(`Hello ${ this.state.message } from ${ childName }` );
    };

    render() {
        return (
          <div>
            <ChildComponent greetHandler={this.greetParent}/>
          </div>
        );
    }
}
export default ParentComponent;