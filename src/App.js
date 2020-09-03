import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { allReducers } from './Reducers/index';
import { Container, Row } from 'react-bootstrap';

import Menu from './Containers/Nav'


const store = createStore(allReducers, compose(
  applyMiddleware(thunk),
  window.devToolExtension ? window.devToolExtension() : f => f
))

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Menu />
          <Switch>
            <Route exact path='/' component={} />
            {/* <Route exact path='/' component={} />
            <Route exact path='/' component={} />
            <Route exact path='/' component={} />
            <Route exact path='/' component={} />
            <Route exact path='/' component={} />
            <Route component={NotFound} /> */}
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
