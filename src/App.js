import React, { Component } from 'react';
import './App.scss';
import Bookshelves from './Bookshelves';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Bookshelves />
      </div>
    );
  }
}

export default App;
