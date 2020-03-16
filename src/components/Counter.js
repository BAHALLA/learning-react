import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    render() {
        return (
          <div>
              <div> Count- {this.state.counter }</div>
              <button onClick = { this.handleIncrementFive } >Increment</button>
          </div>
        );
    }

    handleIncrementFive = () => {
        this.handleIncrement();
        this.handleIncrement();
        this.handleIncrement();
        this.handleIncrement();
        this.handleIncrement();
    };

    handleIncrement = () => {
        this.setState((prevState) => ({
            counter : prevState.counter + 1
        }), () => {
            console.log(this.state.counter);
        });
    }
}

export default Counter;