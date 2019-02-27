import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TestComponent from './Pages/Test';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={TestComponent}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
