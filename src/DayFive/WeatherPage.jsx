import React, { Component } from 'react';
import WeatherComponent from './WeatherComponent';
import '../DaySix/WeatherPage.css';

export default class WeatherPage extends Component {
    render () {
        return (
            <div id="WeatherPage" className="weather-page col-xs-12">
                <h1>Weather Page</h1>
                <div className="col-xs-12 weather-box">
                    <h2>Local Weather</h2>
                    <WeatherComponent />   
                </div>
                <div className="col-xs-6 weather-box">
                    <WeatherComponent city="London, CA" />
                </div>
                <div className="col-xs-6 weather-box">
                    <WeatherComponent city="Beijing" />
                </div>
                <div className="col-xs-6 weather-box">
                    <WeatherComponent coords={{latitude:35, longitude:139}} />
                </div>     
                <div className="col-xs-6 weather-box">
                    <WeatherComponent city="Vancouver,CA" />
                </div>        
            </div>
        );
    }
}