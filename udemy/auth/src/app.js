import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAUnPWJTj4ARf_lI3Vpgcq7d5vgKocS6W4',
      authDomain: 'authentication-d06d5.firebaseapp.com',
      databaseURL: 'https://authentication-d06d5.firebaseio.com',
      projectId: 'authentication-d06d5',
      storageBucket: 'authentication-d06d5.appspot.com',
      messagingSenderId: '711768514381'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) this.setState({ loggedIn: true });
      else this.setState({ loggedIn: false });
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <Spinner />
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
