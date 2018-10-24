import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Bookshelves from './Bookshelves';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Bookshelves />
        )} />
      </div>
    );
  }
}

export default App;
