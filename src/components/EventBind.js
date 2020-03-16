import React, { Component } from "react";

class EventBind extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: 'Hello'
        };

        //this.handleClick = this.handleClick.bind(this);
    }


    render() {
        return (
          <div>
              {/*<button onClick={this.handleClick.bind(this)}>Click Me</button>*/}
              {/*<button onClick={() => this.handleClick.bind() }>Click Me</button>*/}
              <button onClick={this.handleClick}>Click Me</button>
          </div>
        );
    }

    handleClick = () => {
        console.log(this.state.message);
    }
}
export default EventBind;