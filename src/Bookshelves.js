import React, { Component } from 'react';
import defaultBookshelves from './defaultBookshelves';
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';
import './Bookshelves.scss';

class Bookshelves extends Component {

	constructor() {
		super();
		this.state = this.setBookshelvesStates();
	}

	setBookshelvesStates() {
  	let categories = {};
  	defaultBookshelves
			.filter(bookshelve => bookshelve.show)
			.forEach(bookshelve => {
				categories[bookshelve.value] = [];
			});

		return categories;
  }

	updateBookshelves(books) {
		Object.keys(this.state).forEach(category => {
			const booksByCategory = books.filter(book => book.shelf === category);
			this.setState((currentState) => ({[category]: booksByCategory}))
		});
  }

  componentDidMount() {
		BooksAPI.getAll()
      .then((books) => {
      	this.updateBookshelves(books);
      });
  }

  render() {
  	const bookshelves = defaultBookshelves.filter((bookshelve) => bookshelve.show);

  	return (
      <div className="bookshelves-title">
        <h1>MyReads</h1>
        {bookshelves.map((bookshelf, index) => (
        	<Bookshelf
        		key={index}
        		category={bookshelf.label}
        		books={this.state[bookshelf.value]} />
        ))}
      </div>
    );
  }
}

export default Bookshelves;
