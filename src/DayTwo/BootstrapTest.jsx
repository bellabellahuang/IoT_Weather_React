import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

export default class BootstrapTest extends Component {
    render () {
        return (
            <div>
                <Button bsStyle="danger">Click me</Button>
            </div>
        );
    }
}