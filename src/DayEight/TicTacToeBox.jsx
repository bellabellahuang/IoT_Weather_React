import React, { Component } from 'react';

export default class TicTacToeBox extends Component {
    render () {
        return (
            <div className="col-xs-4 box"
                    style={{
                    height: "100px",
                    width: "100px",
                    border: "0px solid black",
                    margin: "0",
                    padding: "0"
                }}
                >
                <button 
                    style={{
                    height: "100px",
                    width: "100px",
                    margin: "0",
                    padding: "0"
                }}

                onClick={this.props.buttonClick}
                >X</button>
                </div>
        );
    }
}