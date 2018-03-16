import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import NewUserForm from '../DayFive/NewUserForm';

export default class SignUpPage extends Component {
    render () {
        return (
            <div className="SignUpPage col-xs-12">
                <h1>Welcome to IOT Weather</h1>
                <NewUserForm />
            </div>
        );
    }
}