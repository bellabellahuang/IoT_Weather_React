import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import firebase, { database } from 'firebase';
import './Profile.css';

export default class Profile extends Component {
    state = {
        currentUser: null,
        imageUrl: 'userImage.png',
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
            .on('value', (snapshot) => {
                console.log('snapshot.val()');
                console.log(snapshot.val());
            });
        
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
                   
            </div>
        );
    }
}