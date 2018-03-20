import React, {Component} from 'react';
import CardItem from './CardItem';
import './MemoryGame.css';
// import '../App.css';

export default class MemoryGame extends Component {

    // function to randomize an array
    shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    render() {
        // generate the two same sets of images randomly
        const images = [];
        const min = 1;
        const max = 12;
        for (let i=1; i<=16; i+=2){
            let number = Math.floor(Math.random() * (max - min) + min);
            images.push(
                {id: i, url: `https://s3.amazonaws.com/yscbuckettest/MemoryGame_images/MG-${number}.jpg`},
                {id: i+1, url: `https://s3.amazonaws.com/yscbuckettest/MemoryGame_images/MG-${number}.jpg`});
        }
        console.log("image numbers: ", images);

        // modify the images to display randomly
        console.log("randomize array: ", this.shuffle(images));

        // display the images
        const cardList = [];
        let count = 0;
        for (let i=1; i<=4; i++){
            for (let j=1; j<=4; j++){
                cardList.push(<CardItem key={count+1} imageurl={images[count].url} />);
                count++;
            }
        }

        return (
            <div className="App">
                <h1>Memory Game</h1>
                <ul className="col-xs-12 cardList">
                    {cardList}
                </ul>
            </div>
        );
    }
}