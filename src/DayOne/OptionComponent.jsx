import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OptionComponent extends Component{
    render () {
        return (            
                    <option value="volvo">{this.props.optionText}</option>
        );
    }
}

OptionComponent.propTypes = {
    optionText: PropTypes.oneOf(
        ["Volvo", "Saab", "BMW"]
    ),
}

OptionComponent.defaultProps = {
    optionText: "test",
}

export default OptionComponent;