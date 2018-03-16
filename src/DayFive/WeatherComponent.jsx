import React, { Component } from 'react';
const api_key = '19f2d22ace813941ead56856922e3baf';

export default class WeatherComponent extends Component {
    constructor (props) {
        super();
        this.state = {
            city: props.city,
            temp: null,
            description: null,
        }
    }

    componentWillMount() {
        
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${api_key}`)
            .then((response) => {return response.json();}).then((json) => {
                this.setState({temp: `${Math.round((json.main.temp - 273.15) * 100) / 100}°C`, description: json.weather[0].description });
                console.log(json);
            });
    }

    render () {
        return (
            <div className="weather-component">
                <h2>Weather Report For <b><em>{this.state.city}</em></b></h2>
                <h3>{this.state.temp} - {this.state.description}</h3>
                
            </div>
        );
    }
}