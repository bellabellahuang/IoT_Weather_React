import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputComponent from '../DayOne/InputComponent.jsx'

export default class PasswordInput extends Component {
    render () {
        return (
            <InputComponent 
                labelText={this.props.label} 
                type={this.props.type} 
                className={this.props.className}
                placeholder={this.props.placeholder}
                maxLength={8}
                minLength={6}
                inputFunction = {this.props.inputFunction} />
        );
    }

}

PasswordInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
}