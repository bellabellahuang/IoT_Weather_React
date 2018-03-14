import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import MyFirstReactComponent from './DayOne/MyFirstReactComponent.jsx';
import InputComponent from './DayOne/InputComponent.jsx';
import SelectComponent from './DayOne/SelectComponent.jsx';
import DualInputWithLabels from './DayTwo/DualInputWithLabels';
import PasswordInput from './DayTwo/PasswordInput';
import ReusableSelect from './DayTwo/ReusableSelectComponent';
import BootstrapTest from './DayTwo/BootstrapTest';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyFirstReactComponent/>
        <InputComponent
          labelText="First Name:"
          default="Bella"
          placeholder="first name"
          required={true}/>
        <InputComponent labelText="Last Name:" default="Huang" placeholder="last name"/>
        <InputComponent
          labelText="Email:"
          default="example@gmail.com"
          placeholder="example@gmail.com"/>

        <SelectComponent label="Options"/>

        <DualInputWithLabels labelOne="First Name: " labelTwo="Last Name:"/>
        <PasswordInput label="Password: " type="password" className="password-input" />
        <ReusableSelect optionsArray={['1','2','3']} />
        <ReusableSelect />
        <ReusableSelect optionsArray={['today','tomorrow','yesterday']} />

        <BootstrapTest />
      </div>
    );
  }
}

export default App;
