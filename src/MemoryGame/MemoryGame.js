import React, {Component} from 'react';
import CardItem from './CardItem';
// import '../App.css';

export default class MemoryGame extends Component {

    render() {
        // generate the two sets of images randomly
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

        // display the images
        const cardList = [];
        let count = 0;
        for (let i=1; i<=4; i++){
            for (let j=1; j<=4; j++){
                cardList.push(<CardItem key={images[count].id} imageurl={images[count].urs} />);
                count++;
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