import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label } from 'react-bootstrap';

export default class BirthdateSelector extends Component {
    // set up the original state
    constructor() {
        super();
        this.state = {
            selectedDay: null,
            selectedMonth: null,
            selectedYear: null,
            isLeapYear: false,
        }
    }

    // update the selectedDay when it is changed
    setDay = (e) => {
        // this.state["selectedDay"] = e.target.value;
        // console.log("selectedDay: ", this.state["selectedDay"]);
        this.setState({selectedDay: e.target.value});
    }

    // update the selectedMonth when it is changed
    setMonth = (e) => {
        // this.state["selectedMonth"] = e.target.value;
        // console.log("selectedMonth: ", this.state["selectedMonth"]);
        this.setState({selectedMonth: e.target.value});
    }

    // update the selectedYear when it is changed
    setYear = (e) => {
        let isLeapYear = false;
        const selectedYear = e.target.value;

        // calculate the selectedYear is leap year or not
        if(selectedYear % 4 === 0){
            if(selectedYear % 100 === 0){
                if(selectedYear % 400 === 0){
                    isLeapYear = true;
                }
            }
            else 
                isLeapYear = true;
        }
        // console.log(isLeapYear);

        // update the state
        this.setState({selectedYear: e.target.value, isLeapYear: isLeapYear});
    }

    render () {

        const dayInEachMonth = {
            "January": 31,
            "February": 28,
            "March": 31,
            "April": 30,
            "May": 31,
            "June": 30,
            "July": 31,
            "August": 31,
            "September": 30,
            "October": 31,
            "November": 30,
            "December": 31
        }

        const dayOptions = [];

        // assign the correct days according to the selectedMonth and isLearYear
        let numberOfDays;
        if(this.state.selectedMonth === "February" && this.state.isLeapYear === true){
            numberOfDays = 29;
        }else{
            numberOfDays = dayInEachMonth[this.state.selectedMonth];
        }

        // create the dayOptions array according to the numberOfDays
        for (let i = 1; i <= numberOfDays; ++i){
            dayOptions.push(
                <option key={i} value={i}>{i}</option>
            );
        }

        // create the yearOptions array
        const yearOptions = [];
        for(let i = new Date().getFullYear(); i >= this.props.minYear; --i){
            yearOptions.push(
                <option key={i} value={i}>{i}</option>
            );
        }

        return (
            <div className="col-xs-12">
                <Label className="col-xs-3" bsStyle="info" style={{"fontSize": "20px"}}>
                    Birth Date:
                </Label>
                <div className="col-xs-3"> 
                    <select defaultValue="Day" onChange={this.setDay} className="form-control">
                        <option value="Day" disabled hidden>Day</option>
                        {dayOptions}
                    </select>
                </div>
                
                <div className="col-xs-3">
                    <select defaultValue="Month" onChange={this.setMonth} className="form-control">
                        <option value="Month" disabled hidden>Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>                                                
                    </select>
                </div>
                
                <div className="col-xs-3">
                    <select defaultValue="Year" onChange={this.setYear} className="form-control">
                        <option value="Year" disabled hidden>Year</option>
                        {yearOptions}
                    </select>
                </div>
            </div>
        );
    }
}

BirthdateSelector.defaultProps = {
    minYear: 1900,
}

BirthdateSelector.propTypes = {
    minYear: PropTypes.number,
}