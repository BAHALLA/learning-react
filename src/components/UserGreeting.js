import React, { Component } from "react";

class UserGreeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        return (
            this.state.isLoggedIn ?
                (
                    <div>Hello taoufiq</div>
                ): (
                    <div>Hello bahalla</div>
                )
            //this.state.isLoggedIn && <div>Hello taoufiq</div>
        );
      /*  if(this.state.isLoggedIn) {
            return (
                <h1>Hello BAHALLA</h1>
            );
        } else {
            return (
               <h1>Hello Guest</h1>
            ) ;

        }*/

    }
}
export default UserGreeting;