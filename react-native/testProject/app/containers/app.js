const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')

const store = require('../store/store.js')
const test = require('./test.js')

const App = () => {
  return (
    <Provider store={ store }>
      <Test />
    </Provider>
  )
}

module.exports = App
