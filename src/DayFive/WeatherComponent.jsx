import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from '../DaySix/WeatherIconList';
// import {geolocated} from 'react-geolocated';
const api_key = '19f2d22ace813941ead56856922e3baf';

export default class WeatherComponent extends Component {
    constructor (props) {
        super();
        this.state = {
            city: props.city,
            temp: null,
            description: null,
            country: null,
            iconid: null
        }
    }

    grabWeather(apiCall){
        fetch(apiCall).then((response) => {return response.json();}).then((json) => {
                this.setState({
                    city:json.name, 
                    temp: `${Math.round((json.main.temp - 273.15) * 100) / 100}°C`, 
                    description: json.weather[0].description,
                    country: json.sys.country,
                    iconid: json.weather[0].id
                });
                console.log(json);
            });
    }

    componentWillMount() {
        
        // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${api_key}`)
        //     .then((response) => {return response.json();}).then((json) => {
        //         this.setState({temp: `${Math.round((json.main.temp - 273.15) * 100) / 100}°C`, description: json.weather[0].description });
        //         console.log(json);
        //     });

        if(this.props.city){
            this.grabWeather(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${api_key}`);
        }else if(this.props.coords){
            this.grabWeather(`http://api.openweathermap.org/data/2.5/weather?lat=${this.props.coords.latitude}&lon=${this.props.coords.longitude}&appid=${api_key}`);
        }else {
            navigator.geolocation.getCurrentPosition((position) => {
                this.grabWeather(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${api_key}`);                
            });
        }
    }

    getWeatherIcon = () => {
        const iconid = this.state.iconid;
        return (<i className={`weather-icon wi wi-${WeatherIcon[iconid]}`}></i>);
    }

    render () {
        return (
            <div className="weather-component">
                <h2>Weather Report For <span className="text-danger"><b><em>{this.state.city}, {this.state.country}</em></b></span></h2>
                <h3 className="text-default">{this.getWeatherIcon()} {this.state.temp} - {this.state.description}</h3>
                
            </div>
        );
    }
}

// export default geolocated({
//   positionOptions: {
//     enableHighAccuracy: false,
//   },
//   userDecisionTimeout: 5000,
// })(WeatherComponent);

WeatherComponent.propTypes = {
    city: PropTypes.string,
    coords: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
    }),
}