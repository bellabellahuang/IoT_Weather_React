import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import firebase, { database } from 'firebase';
import InputComponent from '../DayOne/InputComponent';
import BirthdateSelector from '../DayThree/BirthdateSelector';
import './Profile.css';

export default class Profile extends Component {
    state = {
        currentUser: null,
        imageUrl: 'userImage.png',
        userData: null,
    }

    componentWillMount () {
        console.log('this.state.currentUser');
        console.log(this.state.currentUser);
        if(this.state.currentUser !== firebase.auth().currentUser){
            this.setState({currentUser: firebase.auth().currentUser}, () => 
            {
                console.log('this.state.currentUser');
                console.log(this.state.currentUser);
            });
        }

        firebase.auth().onAuthStateChanged(
            (user) => {
                if(user) {
                    this.setState({currentUser: user});
                    console.log('this.state.currentUser');
                    console.log(this.state.currentUser);
                    let uid = this.state.currentUser.uid;
                    console.log('uid');
                    console.log(uid);
                    this.getUserInfo(uid);
                }else{
                    this.setState({currentUser: null});
                    console.log('this.state.currentUser');
                    console.log(this.state.currentUser);
                }
            });
    }

    getUserInfo = (uid) => {
        database().ref(`users/${uid}`)
            .once('value', (snapshot) => {
                // console.log('snapshot.val()');
                // console.log(snapshot.val());
                if(snapshot.val()){
                    this.setState({userData: {...snapshot.val()}}, () => {console.log(this.state);});
                }
            });
        
    }

    saveChanges = () => {
        console.log('save changes');
        // let updates = {};
        // updates[`users/${this.state.currentUser.uid}`] = this.state.userData;
    }

    render (){
        return (
            <div className="col-xs-12 profile">
                <h1 className="text-danger">Profile Page</h1>
                <div className="col-xs-12">
                <Thumbnail className="profileImage"
                    src={(this.state.currentUser && this.state.currentUser.photoURL) || this.state.imageUrl} 
                    />
                </div>
                { this.state.currentUser ? <h2 className="text-primary">{this.state.currentUser.displayName || this.state.currentUser.email}</h2> : null }
                

                <div>
                    <InputComponent labelText="First Name" labelStyle="danger" inputValue={this.state.userData && this.state.userData.firstName} />
                    <InputComponent labelText="Last Name" labelStyle="danger" inputValue={this.state.userData && this.state.userData.lastName} />
                    <InputComponent labelText="Age" labelStyle="danger" inputValue={this.state.userData && this.state.userData.age} />
                    <InputComponent labelText="Birth Date" labelStyle="danger" inputValue={this.state.userData && this.state.userData.birthDate} />
                    <BirthdateSelector labelStyle="danger" defaultYear={this.state.userDate && new Date(this.state.userData.birthDate).getFullYear()} />
                    {console.log('this.state.userDate && Date(this.state.userData.birthDate).getFullYear()')}
                    {console.log(this.state.userData && new Date(this.state.userData.birthDate).getFullYear())}
                    <InputComponent labelText="Email" labelStyle="danger" inputValue={this.state.userData && this.state.userData.email} />
                    <InputComponent labelText="Phone Number" labelStyle="danger" inputValue={this.state.userData && this.state.userData.phoneNum} />
                    <InputComponent labelText="Address" labelStyle="danger" inputValue={this.state.userData && this.state.userData.address} />
                    <InputComponent labelText="Province/State" labelStyle="danger" inputValue={this.state.userData && this.state.userData.provinceState} />
                    <InputComponent labelText="Country" labelStyle="danger" inputValue={this.state.userData && this.state.userData.country} />

                    <button onClick={this.saveChanges} className="btn btn-warning" type="submit">Save Changes</button>
                </div>
            </div>
        );
    }
}