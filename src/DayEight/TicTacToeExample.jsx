import React, { Component } from 'react';
import TicTacToeBox from './TicTacToeBox';
// import TicTacToe from 'react-tic-tac-toe';

export default class TicTacToeExample extends Component {
    render () {
        return (
            <div className="col-xs-12 game"
                style={{
                    height: "300px",
                    width: "300px",
                    border: "0px solid black",
                    margin: "0",
                    padding: "0"
                }}>
                
                <TicTacToeBox />
                <TicTacToeBox />
                <TicTacToeBox />
                <TicTacToeBox />
                <TicTacToeBox />
                <TicTacToeBox />
                <TicTacToeBox />
                <TicTacToeBox />
                <TicTacToeBox />
                
            </div>
        );
    }
}