const { createStore, combineReducers, applyMiddleware } = require('redux')
const thunk = require('redux-thunk').default
const { view } = require('../reducers/reducers.js')

const reducer = combineReducers({ view })

module.exports = createStore(reducer, {}, applyMiddleware(thunk))
