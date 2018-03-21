import React, { Component } from 'react';
import './FacebookButton.css';
import { auth } from 'firebase';
import history from './history';

export default class FacebookButton extends Component {

    facebookSignUp = () => {
        const provider = new auth.FacebookAuthProvider();
        provider.addScope('email');
        auth().signInWithPopup(provider).then((result) => {
            console.log('result');
            console.log(result);
            this.props.onSuccessLogin();
            history.push('/');
        }).catch(error => {
            console.log('error');
            console.log(error);
        });
    }

    render () {
        return (
            <div className="btn-group facebook-button-group">
                <button className="FacebookSignUpIcon" disabled>
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg" alt="facebook" style={{height:"33px"}} />
                </button>
                <button className="FacebookSignUpBtn" 
                        onClick={this.facebookSignUp}>
                    Sign in with Facebook
                </button>
            </div>
        );
    }
}