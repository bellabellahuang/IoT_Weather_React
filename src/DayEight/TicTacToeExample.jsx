import React, { Component } from 'react';
import TicTacToeBox from './TicTacToeBox';
import '../DayNine/TicTacToe.css';
// import TicTacToe from 'react-tic-tac-toe';

export default class TicTacToeExample extends Component {
    state = {
        gameObject : {
            "0-0": null,
            "0-1": null,
            "0-2": null,
            "1-0": null,
            "1-1": null,
            "1-2": null,
            "2-0": null,
            "2-1": null,
            "2-2": null,
        },
        currentTurn: null,
        startBtnText: "Start",
        winner : {
            "1":["0-0", "0-1", "0-2"],
            "2":["1-0", "1-1", "1-2"],
            "3":["2-0", "2-1", "2-2"],
            "4":["0-0", "1-0", "2-0"],
            "5":["0-1", "1-1", "2-1"],
            "6":["0-2", "1-2", "2-2"],
            "7":["0-0", "1-1", "2-2"],
            "8":["0-2", "1-1", "2-0"],
        },
    }

    startGame = () => {
        if(this.state.startBtnText === "Start"){
            let turn = new Date().getMilliseconds() > 500 ? "x" : "o";
            this.setState({turn: turn, startBtnText: "Restart"});
        }else{
            this.setState({
                turn: null, 
                gameObject: {
                    "0-0": null,
                    "0-1": null,
                    "0-2": null,
                    "1-0": null,
                    "1-1": null,
                    "1-2": null,
                    "2-0": null,
                    "2-1": null,
                    "2-2": null,}, 
                startBtnText: "Start"});
        }
    }

    clickBoardPiece = (pieceId) => {
        let gameObject = this.state.gameObject;
        gameObject[pieceId] = this.state.currentTurn;
        this.setState({gameObject: gameObject, currentTurn: this.state.currentTurn === "x" ? "o" : "x"},
            () => {
                console.log("gameObject: ", gameObject);
                this.checkWinner();
            });
    }

    checkWinner = () => {
        console.log("check winner");
        let gameObject = this.state.gameObject;
        const winner = this.state.winner;
        for (let i = 1; i <= 8; i++ ){
            const [a, b, c] = winner[i];
            console.log("[a, b, c]: " [a, b, c]);
            if(gameObject[a] && gameObject[a] === gameObject[b] && gameObject[a] === gameObject[c]){
                console.log(gameObject[a], " win");
            }
        }
        
    }

    render () {
        return (
           <div 
                className="col-xs-12 game" 
                style={{ 
                    height: "300px",
                    width: "300px",
                    border: "1px solid black",
                    paddingLeft: 0,
                    paddingRight: 0,
                }}
            >
            
            <div className="col-xs-12 row-one" style={{ height: "100px" }} >
                <TicTacToeBox 
                    style={{ borderBottom: "1px solid black", borderRight: "1px solid black" }}
                    id="0-0"
                    gameObject={this.state.gameObject}
                    boardClicked={this.clickBoardPiece} />
                <TicTacToeBox 
                    style={{ borderBottom: "1px solid black", borderRight: "1px solid black" }}
                    id="0-1"
                    gameObject={this.state.gameObject}
                    boardClicked={this.clickBoardPiece} />
                <TicTacToeBox 
                    style={{ borderBottom: "1px solid black" }}
                    id="0-2"
                    gameObject={this.state.gameObject} 
                    boardClicked={this.clickBoardPiece}/>
            </div>
            <div className="col-xs-12 row-two" style={{ height: "100px" }}>
                <TicTacToeBox 
                    style={{ borderBottom: "1px solid black", borderRight: "1px solid black" }}
                    id="1-0"
                    gameObject={this.state.gameObject} 
                    boardClicked={this.clickBoardPiece}/>
                <TicTacToeBox 
                    style={{ borderBottom: "1px solid black", borderRight: "1px solid black" }} 
                    id="1-1"
                    gameObject={this.state.gameObject}
                    boardClicked={this.clickBoardPiece}/>
                <TicTacToeBox 
                    style={{ borderBottom: "1px solid black" }}
                    id="1-2"
                    gameObject={this.state.gameObject} 
                    boardClicked={this.clickBoardPiece}/>
            </div>
            <div className="col-xs-12 row-three" style={{ height: "100px" }}>
                <TicTacToeBox 
                    style={{ borderRight: "1px solid black" }}
                    id="2-0"
                    gameObject={this.state.gameObject} 
                    boardClicked={this.clickBoardPiece}/>
                <TicTacToeBox 
                    style={{ borderRight: "1px solid black" }}
                    id="2-1"
                    gameObject={this.state.gameObject} 
                    boardClicked={this.clickBoardPiece}/>
                <TicTacToeBox 
                    id="2-2"
                    gameObject={this.state.gameObject} 
                    boardClicked={this.clickBoardPiece}/>
            </div>
            {/* child Component for each tile of the game */}
            <button onClick={this.startGame}>{this.state.startBtnText}</button>
            {/*<div>Current Turn: {this.state.turn}</div>*/}
            </div>

            

        );
    }
}