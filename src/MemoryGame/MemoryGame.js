import React, {Component} from 'react';
import CardItem from './CardItem';
// import '../App.css';

export default class MemoryGame extends Component {

    render() {
        const cardList = [];
        for (let i=1; i<=4; i++){
            for (let j=1; j<=4; j++){
                cardList.push(<CardItem />);
            }
        }

        return (
            <div className="App">
                <h1>Memory Game</h1>
                <div className="col-xs-12">
                    {cardList}
                </div>
            </div>
        );
    }
}