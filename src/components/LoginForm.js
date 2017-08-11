import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';


class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };
  
  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }
  
  onLoginFail(error) {
    this.setState({ error: `Authentication Failed. Reason: ${error.message}`, loading: false });
  }

  onLoginSuccess() {
    this.setState({ email: '', password: '', error: '', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    } 
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  renderErrorMessage() {
    if (this.state.error) {
      return (
        <CardSection>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
        </CardSection>
      );
    } 
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input 
            label="Password"
            placeholder="password"
            value={this.state.password}
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>
        <CardSection>
          <Text style={{ textAlign: 'center' }}>
            This will automatically sign you up if your provided email is not in firebase yet.
          </Text>
        </CardSection>

        {this.renderErrorMessage()}
      </Card>
    );
  }
}


const styles = {
  errorTextStyle: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    // alignSelf: 'center',
    color: 'red'
  }
};
export default LoginForm;
