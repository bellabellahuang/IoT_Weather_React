import React, { Component } from 'react';
const api_key = '19f2d22ace813941ead56856922e3baf';

export default class WeatherComponent extends Component {
    constructor (props) {
        super();
        this.state = {
            city: props.city,
        }
    }

    componentWillMount() {
        
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${api_key}`)
            .then((response) => {return response.json();}).then((json) => {console.log(json);});
    }

    render () {
        return (
            <div className="weather-component">
            
            </div>
        );
    }
}