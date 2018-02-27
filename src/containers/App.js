import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Home } from '../components/home'
import { Form } from '../components/form'
import { Router, Route, Switch } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';


export class App extends Component {
  render() {
    const { store } = this.props;
    const history = syncHistoryWithStore(createBrowserHistory(), store)
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="form" component={Form} />
          </Switch>
        </Router>
      </Provider>
    );
  }
};
