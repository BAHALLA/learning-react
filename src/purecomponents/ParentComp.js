import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'taoufiq '
            });
        }, 2000);
    }

    render() {
        console.log('Parent render');
        return (
            <div>
                <h1>Parent Component</h1>
                <MemoComp name={this.state.name}></MemoComp>

                {/*
                <PureComp name={this.state.name}></PureComp>
                <RegularComp name={this.state.name}></RegularComp>*/}
            </div>
        );
    }

}
export default ParentComp;