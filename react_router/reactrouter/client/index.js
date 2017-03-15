const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { Router, Route, applyRouterMiddleware } = require('react-router')

const store = require('./store/store.js')
const { dispatch } = store
const App = require('./components/app.js')
const Page2 = require('./components/page2.js')

const routes = (
  <Route>
    <Route path="/" component={ App } />
    <Route path="/page2" component={ Page2 } />
  </Route>
)

ReactDOM.render(
  <Provider store={ store } dispatch={ dispatch }>
    <Router routes={ routes } store={ store } dispatch={ dispatch }/>
  </Provider>,
  document.getElementById('test')
)
