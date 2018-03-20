import React, { Component } from 'react';
import Base from './base';
import InputComponent from '../DayOne/InputComponent';
import ReusableSelect from '../DayTwo/ReusableSelectComponent';

export default class FirebaseTest extends Component {
    state = {
        favouriteColour: null,
        options: null,
        inputText: null,
    }

    setFavouriteColour = (colour) => {
        this.setState({favouriteColour: colour});
    }

    componentWillMount () {
        this.ref = Base.syncState('test/favouriteColour', {
            context: this,
            state: 'favouriteColour',
        });
    }

    render () {
        return (
            <div className="col-xs-12">
                <InputComponent 
                    labelText="Favourite Colour: " 
                    inputFunction = {this.setFavouriteColour}
                    inputValue={this.state.favouriteColour}
                />
            </div>
        );
    }
}
