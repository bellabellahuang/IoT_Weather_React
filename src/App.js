import React, {Component} from 'react';
import MyFirstReactComponent from './DayOne/MyFirstReactComponent.jsx';
import InputComponent from './DayOne/InputComponent.jsx';
import SelectComponent from './DayOne/SelectComponent.jsx';
import DualInputWithLabels from './DayTwo/DualInputWithLabels';
import PasswordInput from './DayTwo/PasswordInput';
import ReusableSelect from './DayTwo/ReusableSelectComponent';
import BootstrapTest from './DayTwo/BootstrapTest';
import BirthdateSelector from './DayThree/BirthdateSelector';
import SignUpPage from './DayThree/SignUpPage';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App col-xs-12">
        <SignUpPage />
      </div>
    );
  }
}

export default App;
