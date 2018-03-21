import React, { Component } from 'react';
import './FacebookButton.css';
import { auth } from 'firebase';

export default class FacebookButton extends Component {
    render () {
        return (
            <div className="btn-group facebook-button-group">
                <button className="FacebookSignUpIcon" disabled>
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg" alt="facebook" style={{height:"33px"}} />
                </button>
                <button className="FacebookSignUpBtn" 
                        onClick={()=>{}}>
                    Sign in with Facebook
                </button>
            </div>
        );
    }
}