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
import TicTacToeGame from './DayEight/TicTacToeGame.jsx';
import TicTacToeExample from './DayEight/TicTacToeExample';
import history from './DayEight/history';
import Counter from './DayEight/counter';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import Profile from './Day12/Profile';
import PageNotFound from './Day12/PageNotFound';
import FavouriteWeather from './Day13/FavouriteWeather';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  state = {
    showLoginModal: false,
    currentUser: null,
    imageUrl: 'userImage.png',
  }

  openSignInModal = () => {
    this.setState({showLoginModal: true});
  }

  closeSignInModal = () => {
    this.setState({showLoginModal: false});
  }

  componentWillMount () {
    this.addBackgroundToApp(history.location.pathname);
    if(this.state.currentUser !== firebase.auth().currentUser){
      this.setState({currentUser: firebase.auth().currentUser});
    }

    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.setState({currentUser: user, showLoginModal: false});
        }else{
          this.setState({currentUser: null});
        }
      });

    history.listen((location) => {
      this.addBackgroundToApp(location.pathname);
    });
  }

  signOut = () => {
    firebase.auth().signOut();
  }

  addBackgroundToApp = (pathname) => {
    // console.log('addBackgroundToApp');
    const body = document.getRootNode().body;
    
    switch(pathname){
      case "/":
        body.style.backgroundImage = "";
      break;
      case "/WeatherPage":
        body.style.backgroundImage = "url('sky-background.jpg')";
      break;
      case "/SignUp":
        body.style.backgroundImage = "";
      break;
      case "/Profile":
        body.style.backgroundImage = "url('Colorful-background.jpg')";
      break;
      case "/FavouriteWeather":
        body.style.backgroundImage = "";
      break;
      default:
        body.style.backgroundImage = "url('notfound.jpg')";
        body.style.backgroundSize = "cover";
      break;
    }
  }

  render() {
    return (
      <div className="App col-xs-12">
        <Nav bsStyle="pills">
          <NavItem eventKey={1} href="/" onClick={() => history.push("/")}>
            Home
          </NavItem>
          <NavItem eventKey={2} href="/WeatherPage" onClick={() => history.push("/WeatherPage")}>
            Weather
          </NavItem>
          <NavItem eventKey={7} href="/FavouriteWeather" onClick={() => history.push("/FavouriteWeather")}>
            Favourite Weather
          </NavItem>
          <NavItem eventKey={3} href="/SignUp" onClick={() => history.push("/SignUp")}>
            Sign Up
          </NavItem>
          {!this.state.currentUser ?
            <NavItem eventKey={4} onClick={this.openSignInModal}>
              Sign In
            </NavItem>
            : 
            [<NavDropdown eventKey={5} key={5} id={1} title={this.state.currentUser.displayName || this.state.currentUser.email}>
              <MenuItem eventKey={5.1} key={5.1} href="/Profile" onClick={() => history.push("/Profile")} >Profile Page
              </MenuItem>
              <MenuItem eventKey={5.2} key={5.2} onClick={this.signOut}> Sign Out
              </MenuItem>
            </NavDropdown>,
            <NavItem eventKey={6} key={6}>
            <img src={(this.state.currentUser && this.state.currentUser.photoURL) || this.state.imageUrl} style={{height: "20px", width: "20px"}} 
                  alt="current user pic"/>
          </NavItem>]

          }
        </Nav>
        <Router>
          <div>
            <Switch>
              <Route  exact path="/" component={HomePage}/>
              <Route  exact path="/SignUp" component={SignUpPage}/>
              <Route  exact path="/ReactStateTest" component={ReactStateTest}/>
              <Route  exact path="/ParentState" component={ParentState}/>
              <Route  exact path="/OptionSelect" component={OptionSelect}/>  
              <Route  exact path="/MemoryGame" component={MemoryGame}/> 
              <Route  exact path="/WeatherPage" component={WeatherPage}/>
              <Route  exact path="/CardItem" component={CardItem}/>
              <Route  exact path="/RadioButtons" component={RadioButtons}/>   
              <Route  exact path="/TicTacToeGame" component={TicTacToeGame}/>   
              <Route  exact path="/TicTacToeExample" component={TicTacToeExample}/>   
              <Route  exact path="/fizzbuzz" component={Counter}/>   
              <Route  exact path="/Profile" component={Profile}/>   
              <Route  exact path="/FavouriteWeather" 
                      component={() => 
                        <FavouriteWeather 
                          currentUser={this.state.currentUser}
                          openSignInModal={this.openSignInModal} />}
              /> 
              <Route  component={PageNotFound}/>   
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
