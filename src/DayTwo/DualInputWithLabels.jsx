import React, {Component} from 'react';
import InputComponent from '../DayOne/InputComponent.jsx';
import PropTypes from 'prop-types';

export default class DualInputWithLabels extends Component {
  render() {
    return (
      <div>
        <InputComponent labelText={this.props.labelOne} />
        <InputComponent labelText={this.props.labelTwo} />
      </div>
    );
  }
}

DualInputWithLabels.propTypes = {
    labelOne: PropTypes.string,
    labelTwo: PropTypes.string,
}