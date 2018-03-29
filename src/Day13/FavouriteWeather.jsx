import React from 'react';
import history from '../DayEight/history';
import AddFavouriteWeather from './AddFavouriteWeather';
import base from '../DaySeven/base';
import WeatherComponent from '../DayFive/WeatherComponent';

export default class FavouriteWeather extends React.Component {
    state = {
        favouriteLocation: [],
    }

    // sync the favourite locations to the firebase database
    componentDidMount () {
        const currentUser = this.props && this.props.currentUser;
        this.ref = base.syncState(`users/${currentUser && currentUser.uid}/favouriteLocations`, {
            context: this,
            state: 'favouriteLocation'
        });
    }

    addNewLocation = (location) => {
        if(location) {
            this.setState({ favouriteLocation: [...this.state.favouriteLocation, location]});
        }
    }

    removeFavourite = (index) => {
        if (typeof index === "number"){
            this.setState({
                favouriteLocation: [
                    ...this.state.favouriteLocation.slice(0, index),
                    ...this.state.favouriteLocation.slice(index+1)
                ]
            });
        }
    }

    render () {
        const favouriteWeatherLocations = [];
        if(this.state.favouriteLocation && this.state.favouriteLocation.length > 0){
            this.state.favouriteLocation.forEach((location,i) => {
                favouriteWeatherLocations.push(
                    <div key={location} className="col-xs-6 weather-box" style={{ height: "135px"}}>
                        <WeatherComponent 
                            city={location} index={i} 
                            removeFavourite={this.removeFavourite}/>
                    </div>
                );
            });
        }
        return (
            <div id="FavouriteWeatherPage" className="col-xs-12">
                
                {this.props.currentUser ?
                    <div>
                        <h1>Favourite Weather Page</h1>
                        <div>
                        </div>
                    </div>:
                    <div className="col-xs-12">
                        <h5>
                            <a onClick={this.props.openSignInModal}>
                                Sign In
                            </a>
                            <br />
                            <br />
                            or
                            <br />
                            <br />
                            <a onClick={() => history.push('/SignUp')}>
                                Sign Up
                            </a><br />to add a favourite location
                        </h5>
                    </div>
                }

                <AddFavouriteWeather addNewLocation={this.addNewLocation} />
                {favouriteWeatherLocations}
            </div>
        );
    }
}