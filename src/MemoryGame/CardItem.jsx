import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';

export default class CardItem extends Component {
    render () {
        return (
            <div className="col-xs-3">
                <Thumbnail src={this.props.imageurl} style={{height: 100px, width: 100px}}/>
            </div>
        );
    }
}