import React, { Component } from 'react';
import { Modal, Clearfix } from 'react-bootstrap';
import InputComponent from '../DayOne/InputComponent';
import PasswordComponent from '../DayTwo/PasswordInput';

export default class SignInModal extends Component {
    state = {
        error: null,
    }

    render () {
        return (
            <Modal show>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In to IoT Weather</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-xs-12">
                        <InputComponent placeholder="email@gmail.com" labelText="Email"/>
                        <PasswordComponent label="Password" placeholder="password" />
                    </div>
                    <Clearfix />
                </Modal.Body>
            </Modal>
        );
    }
}