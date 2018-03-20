import React, {Component} from 'react';
// import MyFirstReactComponent from './DayOne/MyFirstReactComponent.jsx';
// import InputComponent from './DayOne/InputComponent.jsx';
// import SelectComponent from './DayOne/SelectComponent.jsx';
// import DualInputWithLabels from './DayTwo/DualInputWithLabels';
// import PasswordInput from './DayTwo/PasswordInput';
// import ReusableSelect from './DayTwo/ReusableSelectComponent';
// import BootstrapTest from './DayTwo/BootstrapTest';
// import BirthdateSelector from './DayThree/BirthdateSelector';
import SignUpPage from './DayThree/SignUpPage';
import HomePage from './DayFour/HomePage';
import ReactStateTest from './DayFour/ReactStateTest';
import ParentState from './DayFour/ParentState';
import OptionSelect from './DayFour/OptionSelect';
import MemoryGame from './MemoryGame/MemoryGame';
import WeatherPage from './DayFive/WeatherPage';
import CardItem from './MemoryGame/CardItem';
import { Nav, NavItem } from 'react-bootstrap';
import SignInModal from './DaySix/SignInModal';
import RadioButtons from './DaySeven/RadioButtonsComponent';


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  state = {
    showLoginModal: false,
  }

  openSignInModal = () => {
    this.setState({showLoginModal: true});
  }

  closeSignInModal = () => {
    this.setState({showLoginModal: false});
  }

  render() {
    return (
      <div className="App col-xs-12">
        <Nav bsStyle="pills">
          <NavItem eventKey={1} href="/">
            Home
          </NavItem>
          <NavItem eventKey={2} href="/WeatherPage">
            Weather
          </NavItem>
          <NavItem eventKey={3} href="/SignUp">
            Sign Up
          </NavItem>
          <NavItem eventKey={4} onClick={this.openSignInModal}>
            Sign In
          </NavItem>
        </Nav>
        <Router>
          <div>
            <Switch>
              <Route  exact path="/" component={HomePage}/>
              <Route  path="/SignUp" component={SignUpPage}/>
              <Route  path="/ReactStateTest" component={ReactStateTest}/>
              <Route  path="/ParentState" component={ParentState}/>
              <Route  path="/OptionSelect" component={OptionSelect}/>  
              <Route  path="/MemoryGame" component={MemoryGame}/> 
              <Route  path="/WeatherPage" component={WeatherPage}/>
              <Route  path="/CardItem" component={CardItem}/>
              <Route  path="/RadioButtons" component={RadioButtons}/>   
                 
            </Switch>
          </div>
        </Router>
        <SignInModal
          showModal={this.state.showLoginModal}
          onCloseModal={this.closeSignInModal}
        />
      </div>
    );
  }
}

export default App;
