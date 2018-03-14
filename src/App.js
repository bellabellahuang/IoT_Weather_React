import React, {Component} from 'react';
import MyFirstReactComponent from './DayOne/MyFirstReactComponent.jsx';
import InputComponent from './DayOne/InputComponent.jsx';
import SelectComponent from './DayOne/SelectComponent.jsx';
import DualInputWithLabels from './DayTwo/DualInputWithLabels';
import PasswordInput from './DayTwo/PasswordInput';
import ReusableSelect from './DayTwo/ReusableSelectComponent';
import BootstrapTest from './DayTwo/BootstrapTest';
import BirthdateSelector from './DayThree/BirthdateSelector';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App col-xs-12">
        <h1>Welcome to IOT Weather</h1>
        <form>
          <InputComponent labelText="First Name: " placeholder="first name" />
          <InputComponent labelText="Last Name: " placeholder="last name" />
          <InputComponent labelText="Email: " placeholder="email@gmail.com" />
          <InputComponent type="number" labelText="Age: " placeholder="age" />
          <InputComponent labelText="Birth Day: " placeholder="birth day" />
          <ReusableSelect label="Birth Month: " optionsArray={[1,2,3,4,5,6,7,8,9,10,11,12]} />
          <ReusableSelect label="Birth Year: " optionsArray={[2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990]} />
          <BirthdateSelector minYear={1900} />
          <PasswordInput label="Password: " type="password" placeholder="password (no more than 8 characters)" />
          <PasswordInput label="Confirm Password: " type="password" placeholder="password (no more than 8 characters)" />
          <BootstrapTest  />
        </form>
      </div>
    );
  }
}

export default App;
