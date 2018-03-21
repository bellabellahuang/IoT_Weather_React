import React, { Component } from 'react';
import TicTacToe from 'react-tic-tac-toe';

export default class TicTacToeGame extends Component {
    render () {
        return (
            <TicTacToe width={ 3 } singlePlayer />
        );
    }
}