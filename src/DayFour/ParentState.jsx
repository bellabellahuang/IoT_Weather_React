import React, { Component } from 'react';
import ReactStateTest from './ReactStateTest';

export default class ParentState extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    }

    buttonClick = (e) => {
        this.setState({counter: this.state.counter+1});       
    }

    render () {
        return (
            <div>
                <ReactStateTest counter={this.state.counter} onClick={this.buttonClick} />
            </div>
        );
    }
}