import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import InputComponent from '../DayOne/InputComponent';

export default class RadioButtonComponent extends Component {
    state = {
        selectedOption: this.props.optionsArray[0],
    }

    handleOptionChange = (e) => {
        this.setState({selectedOption: e.target.value});
        // console.log('this.state.selectedOption');
        // console.log(this.state.selectedOption);
    }

    render () {
        const options = [];
        for(let i =0; i<this.props.optionsArray.length; ++i){
            options.push(
                <label className="col-xs-12" key={i}>
                    <input type="radio" name="test" 
                            key={i} 
                            value={this.props.optionsArray[i]} 
                            checked={this.state.selectedOption === `${this.props.optionsArray[i]}`}
                            onChange={this.handleOptionChange}/>
                            {this.props.optionsArray[i]}
                </label>
            );
        }

        return (
            <div style={{textAlign: "left"}}>
                <label>{this.props.label}</label>
                <form className="radioButtons" >
                    {options}
                </form>
            </div>
        );
    }
}

RadioButtonComponent.defaultProps = {
    optionsArray: ["small", "medium", "large"],
    label: "Size: "
}

RadioButtonComponent.propTypes = {
    optionsArray: PropTypes.array,
    label: PropTypes.string,
}