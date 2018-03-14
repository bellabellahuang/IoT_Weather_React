import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BirthdateSelector from './BirthdateSelector'
import InputComponent from '../DayOne/InputComponent.jsx';
import PasswordInput from '../DayTwo/PasswordInput';
import BootstrapTest from '../DayTwo/BootstrapTest';

export default class SignUpPage extends Component {
    render () {
        return (
            <div className="SignUpPage col-xs-12">
                <h1>Welcome to IOT Weather</h1>
                <form>
                    <InputComponent labelText="First Name: " placeholder="first name" />
                    <InputComponent labelText="Last Name: " placeholder="last name" />
                    <InputComponent labelText="Email: " placeholder="email@gmail.com" />
                    <InputComponent type="number" labelText="Age: " placeholder="age" />
                    <BirthdateSelector minYear={1900} />
                    <PasswordInput label="Password: " type="password" placeholder="password (no more than 8 characters)" />
                    <PasswordInput label="Confirm Password: " type="password" placeholder="password (no more than 8 characters)" />
                    <BootstrapTest  />
                </form>
            </div>
        );
    }
}