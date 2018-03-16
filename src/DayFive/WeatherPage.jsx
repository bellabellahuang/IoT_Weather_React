import React, { Component } from 'react';
import WeatherComponent from './WeatherComponent';

export default class WeatherPage extends Component {
    render () {
        return (
            <div className="weather-page">
                <h1>Weather Page</h1>
                <WeatherComponent city="Sarnia" />
            </div>
        );
    }
}