import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import NewUserForm from '../DayFive/NewUserForm';
import { auth, database } from 'firebase';
import history from '../DayEight/history';

export default class SignUpPage extends Component {

    createNewUser = (user) => {
        auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((newUser) => {
                if (newUser) {
                    console.log('newUser: ', newUser);
                }
            })
            .catch(error => {
                this.setState({errorMessage: error.message});
            });
    }

    render () {
        return (
            <div className="SignUpPage col-xs-12">
                <h1>Welcome to IOT Weather</h1>
                <NewUserForm signUpNewUser={this.createNewUser} />  
            </div>
        );
    }
}