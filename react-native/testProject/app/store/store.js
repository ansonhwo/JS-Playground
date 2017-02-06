const { createStore, applyMiddleware } = require('redux')
const reducer = require('../reducer/reducer.js')
const thunk = require('redux-thunk').default

module.exports = createStore(reducer, { message: 'Hello World' }, applyMiddleware(thunk))
