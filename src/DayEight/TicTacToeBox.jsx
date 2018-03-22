import React, { Component } from 'react';
import '../DayNine/TicTacToe.css';

export default class TicTacToeBox extends Component {

    render () {
        return (
                <div 
                    className="col-xs-4 board" 
                    style={this.props.style}
                    onClick={() => {this.props.boardClicked(this.props.id)}}
                    >{this.props.gameObject[this.props.id]}</div>
        );
    }
}