import React, { Component } from 'react';
import {
  ScrollView, Text
} from 'react-native';
import firebase from 'firebase';
import { 
  Header, Button, FullScreenSpinner, Card, CardSection
} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null, user: null };
  
  componentWillMount() {
    // register at https://firebase.google.com to get your own config object
    // this value will not work! 
    const config = {
      apiKey: 'AIzaSyCl1245yhf12dKVg9_WblFzm1-3I',
      authDomain: 'ausdxetvxvtia24hn-c5ce1.firebaseapp.com',
      databaseURL: 'https://aasdg4y123erfcen-c5ce1.firebaseio.com',
      projectId: 'aasdg4y123erfcen-c5ce1',
      storageBucket: 'aasdg4y123erfcen-c5ce1.appspot.com',
      messagingSenderId: '97046yh3r39'
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) { // if user isn't null, it means they are logged in
        this.setState({ loggedIn: true, user });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  
  renderContent() {
    switch (this.state.loggedIn) {
      case true: 
        return (
          <Card>
            <CardSection>
              <Text>displayName: </Text>
              <Text>{this.state.user.displayName || 'null'}</Text>
            </CardSection>
            
            <CardSection>
              <Text>email: </Text>
              <Text>{this.state.user.email || 'null'}</Text>
            </CardSection>
            
            <CardSection>
              <Text>phoneNumber: </Text>
              <Text>{this.state.user.phoneNumber || 'null'}</Text>
            </CardSection>
            
            <CardSection>
              <Text>photoUrl: </Text>
              <Text>{this.state.user.photoUrl || 'null'}</Text>
            </CardSection>
            
            <CardSection>
              <Text>providerId: </Text>
              <Text>{this.state.user.providerId || 'null'}</Text>
            </CardSection>
            
            <CardSection>
              <Text>uid: </Text>
              <Text>{this.state.user.uid || 'null'}</Text>
            </CardSection>

            <CardSection>
              <Button
                onPress={() => firebase.auth().signOut()}
              >
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false: 
        return <LoginForm />;
      default: 
        return <FullScreenSpinner />;
    }
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </ScrollView>
    );
  }
}

export default App;
