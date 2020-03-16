import React, { Component } from "react";

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'Welcome to the world of react !!'
        }
    }

    render() {
        return (
            <div>
                <h1> { this.state.message } </h1>
                <button onClick={() => this.handleMessageChange()}>Subscribe</button>
            </div>
        );
    }

    handleMessageChange() {
        this.setState({
            message: 'Thanks for subscribing !!!'
        });
    }
}
export default Message;