import React, { Component } from 'react';
import Base from './base';
import InputComponent from '../DayOne/InputComponent';
// import ReusableSelect from '../DayTwo/ReusableSelectComponent';
import OptionSelect from '../DayFour/OptionSelect';

export default class FirebaseTest extends Component {
    state = {
        favouriteColour: null,
        options: [],
        inputText: null,
    }

    setFavouriteColour = (colour) => {
        this.setState({favouriteColour: colour});
    }

    // setOptions = () => {
    //     let options = this.state.options;
    //     options.push(this.state.inputText);
    //     this.setState({options: options, inputValue: ""});
    // }

    // changeInput = (e) => {
    //     this.setState({inputText: e.target.value});
    // }

    componentWillMount () {
        // save the state to the realtime database in firebase
        this.ref = Base.syncState('test/favouriteColour', {
            context: this,
            state: 'favouriteColour',
        });

        this.ref = Base.syncState('test/options', {
            context: this,
            state: 'options',
        });

        this.ref = Base.syncState('test/inputText', {
            context: this,
            state: 'inputText',
        })
    }

    render () {
        const optionsArray = JSON.parse(typeof this.state.options === "object" ? "[]" : this.state.options);
        return (
            <div className="col-xs-12">
                <InputComponent 
                    labelText="Favourite Colour" 
                    inputFunction = {this.setFavouriteColour}
                    inputValue={this.state.favouriteColour}
                />

                <div>
                    <OptionSelect label="Options" 
                        optionsArray={optionsArray} 
                        onOptionAdded={(newOptions) => this.setState({options: newOptions})} />
                </div>
            </div>
        );
    }
}
