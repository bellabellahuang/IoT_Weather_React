import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';

export default class CardItem extends Component {
    render () {
        return (
            <div className="col-xs-3">
                <div style={{"height":"200px","width": "200px"}}>
                    <Thumbnail src={this.props.imageurl} />
                </div>
            </div>
        );
    }
}