import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import NewUserForm from '../DayFive/NewUserForm';
import { auth, database } from 'firebase';
import history from '../DayEight/history';
import { omit } from 'lodash';

export default class SignUpPage extends Component {

    createNewUser = (user) => {
        const userWithoutWarning = omit(user, ['errorMessage', 'password', 'confirmPassword']);
        auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((newUser) => {
                if (newUser) {
                    // save the user info into the database
                    // const { email, firstName, lastName, address, country, ...rest } = user;
                    database().ref(`users/${newUser.uid}`).set({
                        ...userWithoutWarning,
                    });
                    history.push('/Home');
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