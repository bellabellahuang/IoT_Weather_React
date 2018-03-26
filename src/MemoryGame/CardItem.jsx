import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import './MemoryGame.css';

export default class CardItem extends Component {
    state = {
        randomImagesList: this.props.imageList,
    }

    render () {
        return (
            <li className="card col-xs-3">
                <Thumbnail 
                    src={this.props.imageurl} 
                    className="img"
                    row={this.props.row}
                    column={this.props.column}
                    onClick={this.props.changeImage(this.state.randomImagesList[this.props.row][this.props.column])} />
            </li>
        );
    }
}