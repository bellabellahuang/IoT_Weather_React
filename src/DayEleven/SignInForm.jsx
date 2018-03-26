import React, { Component } from 'react';
import InputComponent from '../DayOne/InputComponent';
import PasswordComponent from '../DayTwo/PasswordInput';
import firebase from 'firebase';

export default class SignInForm extends Component {
    state = {
        username: "",
        password: "",
    }

    loginWithEmailAndPassword = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
            .then(user => {
                if(user){
                    this.props.onSuccessLogin();
                }
            })
            .catch(error => {
                this.props.onError(error.message);
            });
    }
    
    render () {
        return (
            <div className="col-xs-12">
                <div className="col-xs-12">
                    <InputComponent placeholder="Email"
                        labelText="Email"
                        inputFunction={
                            (email) => {this.setState({username: email});}
                        }
                    />
                </div>
                <div className="col-xs-12">
                    <PasswordComponent 
                        inputFunction={(password) => {this.setState({password: password});}}
                    />
                </div>
                <div className="col-xs-3 col-xs-push-9" style={{marginTop: "10px", padding: "none"}}>
                    <button className="btn btn-primary col-xs-12"
                            onClick={this.loginWithEmailAndPassword}>Sign In</button>
                </div>
            </div>
        );
    }
}