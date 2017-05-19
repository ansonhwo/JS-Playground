import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(({ message }) => this.onLoginFail(message));
      });
  }

  onLoginFail(message) {
    this.setState({
      error: message,
      loading: false 
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    });
  }

  renderButton() {
    if (this.state.loading) return <Spinner size="small" />;
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    const { errorTextStyle } = styles;

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.email}
            placeholder="user@gmail.com"
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            value={this.state.password}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>
        <Text style={errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
