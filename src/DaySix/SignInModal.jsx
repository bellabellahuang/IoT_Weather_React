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
            <Modal show={this.props.showModal} onHide={this.props.onCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In to IoT Weather</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-xs-12">
                        <div style={{marginBottom:"10px"}}>Don't have an account? Sign Up <a href="/SignUp">here</a></div>
                        <InputComponent placeholder="email@gmail.com" labelText="Email"/>
                        <PasswordComponent label="Password" placeholder="password" type="password" />
                    </div>
                    <Clearfix />
                </Modal.Body>
            </Modal>
        );
    }
}