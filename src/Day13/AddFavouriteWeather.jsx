import React, { Component } from 'react';

export default class AddFavouriteWeather extends Component {
    
    state = {
        newLocationText: null,
    }
    
    render () {
        const { newLocationText } = this.state;
        return (
            <div className="col-xs-12">
                <div className="col-xs-9">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add a new favourite location"
                        onChange={(e) => this.setState({newLocationText: e.target.value})}
                    />
                </div>
                <div className="col-xs-3">
                    <button 
                        className="btn btn-default"
                        disabled={!newLocationText}
                        onClick={() => this.props.addNewLocation(newLocationText)}>
                        Add Location
                    </button>
                </div>
            </div>
        );
    }
}