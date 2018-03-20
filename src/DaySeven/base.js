import React from 'react';
import firebase from 'firebase';
import Rebase from 're-base';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCuYaRmXXXweeWBJvmRkB69xtg22pbGVqk",
    authDomain: "iot-weather-1866b.firebaseapp.com",
    databaseURL: "https://iot-weather-1866b.firebaseio.com",
});

export default Rebase.createClass(app.database());