import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import './MemoryGame.css';

export default class CardItem extends Component {
    render () {
        return (
            <li className="card col-xs-3">
                <Thumbnail src={this.props.imageurl} className="img" />
            </li>
        );
    }
}