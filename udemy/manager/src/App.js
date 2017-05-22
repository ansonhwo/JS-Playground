import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCRHJWLmM94Kh5hPsMz5P54ZYCMiIi06xA',
      authDomain: 'manager-42a0d.firebaseapp.com',
      databaseURL: 'https://manager-42a0d.firebaseio.com',
      projectId: 'manager-42a0d',
      storageBucket: 'manager-42a0d.appspot.com',
      messagingSenderId: '696075480922'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
