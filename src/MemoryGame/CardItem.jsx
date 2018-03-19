import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';

export default class CardItem extends Component {
    render () {
        return (
            <div className="col-xs-3">
                <Thumbnail src="https://media.cntraveler.com/photos/59de1b2bd74f3663416ffea6/master/pass/Uber-Balloon_GettyImages-639592854.jpg" />
            </div>
        );
    }
}