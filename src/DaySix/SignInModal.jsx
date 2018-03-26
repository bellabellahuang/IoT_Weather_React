import React, { Component } from 'react';
import { Modal, Clearfix } from 'react-bootstrap';
import InputComponent from '../DayOne/InputComponent';
import PasswordComponent from '../DayTwo/PasswordInput';
import FacebookButton from '../DayEight/FacebookButton';
import SignInForm from '../DayEleven/SignInForm';

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
                    {this.state.error ?
                        <div className="col-xs-12" style={{color: "red"}}>{this.state.error}</div>
                        :null
                    }
                    <div className="col-xs-12">
                        <div style={{marginBottom:"10px"}}>Don't have an account? Sign Up <a href="/SignUp">here</a></div>
                        <div className="col-xs-9 col-xs-push-3">
                            <FacebookButton 
                                onSuccessLogin={this.props.onCloseModal}
                            />
                        </div>
                        <SignInForm 
                            onSuccessLogin={() => {
                                this.setState({error: null});
                                this.props.onCloseModal;
                            }}
                            onError={(error) => {this.setState({error: error});}}
                        />
                    </div>
                    <Clearfix />
                </Modal.Body>
            </Modal>
        );
    }
}