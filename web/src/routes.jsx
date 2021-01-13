import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../src/todo/todo'
import About from '../src/about/about'

export default props => (
  <Router history={hashHistory}>
    <Route path='/todos' component={Todo} />
    <Route path='/about' component={About} />
    <Redirect from='*' to='/todos' />
  </Router>
)