import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Home } from '../components/home'
import { Form } from '../components/form'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

export class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/form" component={Form} />
            <Route exact path="/" component={Home} />
            <Redirect from='*' to='/' />
          </Switch>
        </Router>
      </Provider>
    );
  }
};
