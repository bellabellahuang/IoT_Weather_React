import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Label } from 'react-bootstrap';

export default class ReusableSelect extends Component {
  // onSelect = function(e) {     console.log('onSelect');
  // console.log(e.target.value); }

  onSelect = (e) => {
    console.log('this');
    console.log(this);
    console.log('this.addTwo');
    console.log(this.addTwo);
    console.log(this.addTwo(2));
  }

  addTwo = function (val) {
    console.log('val');
    console.log(val);
    return val + 2;
  }

  render() {
    const options = [];
    for (let i = 0; i < this.props.optionsArray.length; ++i) {
      options.push(
        <option key={i} value={this.props.optionsArray[i]}>
          {this.props.optionsArray[i]}
        </option>
      );
    }

    return (
      <div className="col-xs-12" >
        <Label className="col-xs-3" bsStyle="info" style={{"font-size": "20px"}}>
          {this.props.label}
        </Label>
        <div className="col-xs-9">
        <select onChange={this.onSelect} className="form-control">
          {options}
        </select>
        </div>
      </div>
    );
  }
}

ReusableSelect.propTypes = {
  optionsArray: PropTypes.array,
  label: PropTypes.string,
}

ReusableSelect.defaultProps = {
  optionsArray: ['1', '2', '3', '4', '5'],
}