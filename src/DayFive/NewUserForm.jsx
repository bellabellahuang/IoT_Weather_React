import React, {Component} from 'react';
import BirthdateSelector from '../DayThree/BirthdateSelector';
import InputComponent from '../DayOne/InputComponent.jsx';
import PasswordInput from '../DayTwo/PasswordInput';
// import BootstrapTest from '../DayTwo/BootstrapTest';
import OptionSelect from '../DayFour/OptionSelect';
import ReusableSelect from '../DayTwo/ReusableSelectComponent';


const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/;

export default class NewUserForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: null,
      lastName: null,
      age: null,
      email: null,
      phoneNum: null,
      password: null,
      confirmPassword: null,
      country: null,
      provinceState: null,
      birthDate: null,
      address: null,
      errorMessage: null,
      listOfOptions: null,
    }
  }

  setFirstName = (firstName) => {
    this.setState({firstName: firstName});
  }

  setLastName = (lastName) => {
    this.setState({lastName: lastName});
  }

  setAge = (age) => {
    this.setState({age: age});
  }

  setEmail = (email) => {
    this.setState({email: email});
  }

  setPhoneNum = (phoneNum) => {
    this.setState({phoneNum: phoneNum});
  }

  setPassword = (password) => {
    this.setState({password: password});
  }

  setConfirmPassword = (confirmPassword) => {
    this.setState({confirmPassword: confirmPassword});
  }

  setAddress = (address) => {
    this.setState({address: address});
  }

  setCountry = (country) => {
    this.setState({country: country});
  }

  setProvinceState = (provinceState) => {
    this.setState({provinceState: provinceState});
  }

  setBirthDate = (birthDate) => {
    this.setState({birthDate: birthDate});
  }

  updateListOfProvices = (options) => {
    this.setState({listOfOptions: options});
  }

  addNewUser = (e) => {
    e.preventDefault();
    let errorMessage = "";
    const { 
      firstName, 
      lastName, 
      age, 
      email, 
      phoneNum, 
      password, 
      confirmPassword, 
      country, 
      provinceState, 
      birthDate, 
      address} = this.state;

    if (!firstName){
      // this.setState({errorMessage: "Please enter a first name"});
      errorMessage = "Please enter a first name";
    }else if (!lastName){
      errorMessage = "Please enter a last name";
    }else if (!age){
      errorMessage = "Please enter your age";
    }else if (!email || !emailRegex.test(email)){
      errorMessage = "The email address entered is not a valid address";
    }else if (!phoneNum){
      errorMessage = "Enter your phone number";
    }else if(!phoneRegex.test(phoneNum)){
      errorMessage = "Please enter a valid phone number";
    }else if(!password){
      errorMessage = "Please enter a password";
    }else if(password.length < 6){
      errorMessage = "Password must be at least 6 characters long";
    }else if(!confirmPassword){
      errorMessage = "Please confirm your password";
    }else if(!confirmPassword.length >= 6 || confirmPassword !== password){
      errorMessage = "Your password don't match";
    }else if(!address){
      errorMessage = "Please enter your address";
    }else if(!country){
      errorMessage = "Please enter your country";
    }else if(!provinceState){
      errorMessage = "Please enter your province/state";
    // }else if(!birthDate){
    //   errorMessage = "Please enter a valid Birth Date";
    }else {
      this.props.signUpNewUser(this.state);
    }

    
    this.setState({errorMessage: errorMessage});
  }

  render() {
    return (
      <form >
         {this.state.errorMessage ? 
                    <div>{this.state.errorMessage}</div> : null}
                
        <InputComponent
          labelText="First Name: "
          placeholder="first name"
          inputFunction={this.setFirstName}/>
        <InputComponent
          labelText="Last Name: "
          placeholder="last name"
          inputFunction={this.setLastName}/>
        <InputComponent
          labelText="Email: "
          placeholder="email@gmail.com"
          inputFunction={this.setEmail}/>
        <InputComponent
          type="number"
          labelText="Age: "
          placeholder="age"
          inputFunction={this.setAge}/>
        <InputComponent
          labelText="Phone Number: "
          placeholder="phone number"
          inputFunction={this.setPhoneNum}/>
        <PasswordInput
          label="Password: "
          type="password"
          placeholder="password (no more than 8 characters)"
          inputFunction={this.setPassword}/>
        <PasswordInput
          label="Confirm Password: "
          type="password"
          placeholder="password (no more than 8 characters)"
          inputFunction={this.setConfirmPassword}/>
        <BirthdateSelector minYear={1900} changeDate={this.setBirthDate}/>
        <InputComponent labelText="Address:" inputFunction={this.setAddress}/>
        <ReusableSelect 
            optionsArray={['Canada', 'China', 'India']} selectorClass="col-xs-9" label="Country: "
            selectFunction={this.setCountry} />
        <OptionSelect 
            optionsArray={["ON", "BC", "AB"]} 
            selectorClass="col-xs-6" label="Province: "
            selectFunction={this.setProvinceState}/>

        <button onClick={this.addNewUser} className="btn btn-danger" type="submit">Create User</button>
      </form>
    );
  }
}