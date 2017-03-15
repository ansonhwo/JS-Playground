import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>
const NotFound = () => <h1>404... This page is not found!</h1>


const Nav = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/address'>Address</Link>
    </div>
  )
}


const Container = (props) => {
  return (
    <div>
      <Nav />
      { props.children }
    </div>
  )
}

const App = () => {
  return (
    <Router history={ history }>
      <Route path='/' component={ Container }>
        <div>
          <IndexRoute component={ Home } />
          <Route path='address' component={ Address } />
          <Route path='*' component={ NotFound } />
        </div>
      </Route>
    </Router>
  )
}

export default App
