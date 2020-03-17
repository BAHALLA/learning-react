import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
        console.log('constructor A');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('derived state from A');
        return null;
    }

    componentDidMount() {
        console.log('did mount A');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("should update A");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('SnapshotBeforeUpdate A');
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update A');
    }

    render() {
        console.log('render A');
        return (
          <div>
              <h1>Lifecycle A</h1>
              <button onClick={this.changeState}>Change state</button>
              <LifecycleB></LifecycleB>

          </div>
        );
    }

    changeState = () => {
      this.setState({
        name: 'taoufiq'
      });
    };
}
export default LifecycleA;