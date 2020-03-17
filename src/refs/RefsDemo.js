import React, { Component } from "react";

class RefsDemo extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    componentDidMount() {
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }

    render() {
        return (
          <div>
              <input type="text" ref={this.inputRef}/>
              <button onClick={this.clickHandler}>Click</button>
          </div>
        );
    }

    clickHandler = () => {
        alert(`${this.inputRef.current.value}`);
    };
}
export default RefsDemo;