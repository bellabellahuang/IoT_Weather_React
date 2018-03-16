import React, {Component} from 'react';
import BirthdateSelector from '../DayThree/BirthdateSelector';
import InputComponent from '../DayOne/InputComponent.jsx';
import PasswordInput from '../DayTwo/PasswordInput';
// import BootstrapTest from '../DayTwo/BootstrapTest';
import OptionSelect from '../DayFour/OptionSelect';
import ReusableSelect from '../DayTwo/ReusableSelectComponent';

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
      address: null
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

  render() {
    return (
      <form>
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
        <BirthdateSelector minYear={1900} inputFunction={this.setBirthDate}/>
        <InputComponent labelText="Address:" inputFunction={this.setAddress}/>
        <ReusableSelect 
            optionsArray={["China", "Canada", "Janpan", "India"]} selectorClass="col-xs-9" label="Country: "
            selectFunction={this.setCountry} />
        <OptionSelect 
            optionsArray={["ON", "BC", "AB"]} 
            selectorClass="col-xs-3" label="Province: "
            selectFunction={this.setProvinceState}/>

        <button className="btn btn-danger" type="submit">Create User</button>
      </form>
    );
  }
}