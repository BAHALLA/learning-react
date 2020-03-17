import React, { Component } from "react";

class LifecycleB extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
        console.log('constructor B');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('derived state from B');
        return null;
    }

    componentDidMount() {
        console.log('did mount B');
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("should update B");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('SnapshotBeforeUpdate B');
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update B');
    }

    render() {
        console.log('render B');
        return (
            <div>
                <h1>Lifecycle B</h1>
            </div>
        );
    }

}
export default LifecycleB;