import React from 'react';

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
        <Container fluid className='mh-100'>
          <Menu />
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
