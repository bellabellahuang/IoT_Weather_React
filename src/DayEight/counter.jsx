import React, {Component} from 'react';

export default class counter extends Component {
    state = {
        counter: 0,
        message: null,
    }

    determindMessage = () => {
        let counter = this.state.counter;
        let result = "";
        if(counter % 3 === 0){
            if(counter % 5 === 0){
                result = "FizzBuzz";
            }else{
                result = "Fizz";
            }
        }else if(counter % 5 === 0){
            result = "Buzz";
        }else {
            result = counter;
        }
        this.setState({message: result});
        // console.log("message: ", this.state.message);        
    }

    increase = () => {
        this.setState({counter: this.state.counter+1}, 
        () => {this.determindMessage();});
        // console.log("counter: ", this.state.counter);
        
    }

    discrease = () => {
        this.setState({counter: this.state.counter-1},
        () => {this.determindMessage();});
        // console.log("counter: ", this.state.counter);  
    }

    

    render () {
        return (
            <div className="counterComponent">
                <label>{this.state.message}</label>
                <button className="minus" onClick={this.discrease}>-</button>
                <button className="plus" onClick={this.increase}>+</button>
            </div>
        );
    }
}