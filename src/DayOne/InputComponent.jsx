// { component } is a named import of the component class
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Label } from 'react-bootstrap';

class InputComponent extends Component {
  // if old function is used, you have to bind the function in the constructor so you can use this
  // constructor () {
  //   super();
  //   this.changeInput = this.changeInput.bind(this);
  // }

  // changeInput = function (event) {
  //   // console.log(event);
  //   this.props.inputFunction(event.target.value);
  // }

  render() {
    // console.log('this.props');
    // console.log(this.props);
    return (
      <div className="col-xs-12">
        <Label className="col-xs-3" bsStyle="info" style={{"fontSize": "20px"}}>
          {this.props.labelText}
        </Label>
        <div className="col-xs-9">
          <input
            type={this.props.type}
            className="form-control"
            min={this.props.min}
            max={this.props.max}
            required={this.props.required}
            placeholder={this.props.placeholder}
            defaultValue={this.props.default}
            maxLength={this.props.maxLength}
            onChange={(e) => {this.props.inputFunction(e.target.value)}}
            /*value={this.props.inputValue}*/
            />
        </div>
      </div>
    );
  }
}

InputComponent.defaultProps = {
  required: true,
  placeholder: "placeholder",
  className: "react-input",
  inputFunction: () => {},
  inputValue: "default",
}

InputComponent.propTypes = {
  required: PropTypes.bool,
  placeholder: PropTypes.string,
}

export default InputComponent;