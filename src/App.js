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
import Home from './Containers/Home'
import About from './Containers/About'
import Portfolio from './Containers/Portfolio'
import Blog from './Containers/Blog'
import PortifolioPage from './Containers/PortifolioPage';


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
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/portfolio/:' component={PortifolioPage} />
            {/* <Route exact path='/' component={} />
            <Route component={NotFound} /> */}
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
