import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { default as thunk } from 'redux-thunk'

import reducers from './reducers'

const store = createStore(
  combineReducers({ reducers }),
  applyMiddleware(thunk)
)

import App from './app'

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
