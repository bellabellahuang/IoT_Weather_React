import React, { Component } from 'react';
import ReusableSelectComponent from '../DayTwo/ReusableSelectComponent';

export default class OptionSelect extends Component {
    constructor (props) {
        super();
        this.state = {
            options: props.optionsArray,
            inputValue: "",
        }
    }

    changeInput = (e) => {
        this.setState({inputValue: e.target.value});
    }

    addNewOption = () => {
        // console.log('button click');
        // console.log('input:', this.state.inputValue);

        let options = this.state.options;
        options.push(this.state.inputValue);
        this.setState({options: options, inputValue: ""});

        // console.log('options: ', this.state.options);
    }

    render () {
        return (
            <div className="options-selector col-xs-12 form-inline">
                <ReusableSelectComponent 
                    optionsArray={this.state.options} selectorClass={this.props.selectorClass} label={this.props.label}
                    selectFunction={this.props.selectFunction}
                    reusableSelectClass="col-xs-6" />
                <div className=" col-xs-6">
                    <input className="form-control col-xs-3" onChange={this.changeInput} value={this.state.inputValue}></input>
                    <button className="btn btn-default col-xs-3" onClick={this.addNewOption}>Add New Option</button>
                </div>
            </div>
        );
    }
}