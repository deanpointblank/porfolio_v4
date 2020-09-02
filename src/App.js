import React from 'react';

import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { allReducers } from './Reducers/index';
import { Container, Row } from 'react-bootstrap';

import Navbar from './Containers/Nav'


const store = createStore(allReducers, compose(
  spplyMiddleware(thunk),
  windoww.devToolExtension ? window.devToolExtension() : f => f
))

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container fluid className='mh-100'>
          <Navbar />
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
