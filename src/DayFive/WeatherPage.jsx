import React, { Component } from 'react';
import WeatherComponent from './WeatherComponent';

export default class WeatherPage extends Component {
    render () {
        return (
            <div className="weather-page">
                <h1>Weather Page</h1>
                <div className="col-xs-12">
                    <h2>Local Weather</h2>
                    <WeatherComponent />   
                </div>
                <div className="col-xs-6">
                    <WeatherComponent city="London, CA" />
                    <WeatherComponent city="Beijing" />
                </div>
                <div className="col-xs-6">
                    <WeatherComponent coords={{latitude:35, longitude:139}} />
                    <WeatherComponent city="Vancouver,CA" />
                </div>          
            </div>
        );
    }
}