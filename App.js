/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import firebase from 'firebase';
import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Header, Button, CardSection, Spinner } from './src/component/common';
import LoginForm from './src/component/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCQNe_uyPIhmhz7mPAD8vsllyydzrcrhxs',
      authDomain: 'auth-4de77.firebaseapp.com',
      databaseURL: 'https://auth-4de77.firebaseio.com',
      projectId: 'auth-4de77',
      storageBucket: 'auth-4de77.appspot.com',
      messagingSenderId: '688007488021'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email);
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
         </Button>
        </CardSection>
      );
      case false:
      return (
        <LoginForm />
      );
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View >
        <Header headerText="Authenticate" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
