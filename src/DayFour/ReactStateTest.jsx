import React, { Component } from 'react';

export default class ReactStateTest extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    }

    clickCounter = (e) => {
        this.setState({counter: ++this.state.counter});       
    }

    render () {
        return (
            <button onClick={this.clickCounter}>Click me! {this.state.counter}</button>
        );
    }
}
