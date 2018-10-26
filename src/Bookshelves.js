import React, { Component } from 'react';
import defaultBookshelves from './defaultBookshelves';
import './Bookshelves.scss';

class Bookshelves extends Component {
  render() {
  	const bookshelves = defaultBookshelves.filter((bookshelve) => bookshelve.show);

  	return (
      <div className="bookshelves-title">
        <h1>MyReads</h1>
        {bookshelves.map((bookshelve, index) => (
        	<div key={index} className="list-books-content">
        		{bookshelve.label}
        	</div>
        ))}
      </div>
    );
  }
}

export default Bookshelves;
