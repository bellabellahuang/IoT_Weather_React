// { component } is a named import of the component class
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Label } from 'react-bootstrap';

class InputComponent extends Component {
  changeInput = function (event) {
    console.log(event);
  }

  render() {
    console.log('this.props');
    console.log(this.props);
    return (
      <div>
        <Label className="col-xs-3" bsStyle="info" style={{"font-size": "20px"}}>
          {this.props.labelText}
        </Label>
        <div className="col-xs-9">
          <input
            type={this.props.type}
            className="form-control"
            required={this.props.required}
            placeholder={this.props.placeholder}
            defaultValue={this.props.default}
            maxLength={this.props.maxLength}
            onChange={this.changeInput}/>
        </div>
      </div>
    );
  }
}

InputComponent.defaultProps = {
  required: true,
  placeholder: "placeholder",
  className: "react-input"
}

InputComponent.propTypes = {
  required: PropTypes.bool,
  placeholder: PropTypes.string
}

export default InputComponent;