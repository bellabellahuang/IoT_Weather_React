import React, { Component } from 'react';
import OptionSelect from './OptionSelect';
import SignInModal from '../DaySix/SignInModal';
import RadioButtons from '../DaySeven/RadioButtonsComponent';
import FirebaseTest from '../DaySeven/FirebaseTest';

export default class HomePage extends Component {
    render () {
        return (
            <div className="HomePage">
                <h1>Welcome to IoT Weather</h1>
                <OptionSelect optionsArray={["1","2","3"]} />
                <SignInModal />
                <RadioButtons optionsArray={["Yesterday", "Today", "Tomorrow", "hello"]} />
                <FirebaseTest />
            </div>
        );
    }
}