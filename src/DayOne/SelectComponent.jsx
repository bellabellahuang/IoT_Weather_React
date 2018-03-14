import React, { Component } from 'react';
import OptionComponent from './OptionComponent.jsx';
// import PropTypes from 'prop-types';

class SelectComponent extends Component{
    render () {
        return (
            <label>
                {this.props.label}
                <select>
                    <OptionComponent optionText="Volvo" />
                    <OptionComponent optionText="Saab" />
                    <OptionComponent optionText="BMW" />
                </select>
            </label>
            
        );
    }
}

export default SelectComponent;