import React, { Component } from 'react';
import defaultBookshelves from './defaultBookshelves';
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';
import './Bookshelves.scss';

// import defaultBooks from './defaultBooks';

class Bookshelves extends Component {

	constructor() {
		super();
		this.state = this.setBookshelvesStates();
	}

	setBookshelvesStates = () => {
  	let categories = {};
  	defaultBookshelves
			.filter(bookshelve => bookshelve.show)
			.forEach(bookshelve => {
				categories[bookshelve.value] = [];
			});

		return categories;
  }

	updateBooks = (books) => {
		Object.keys(this.state).forEach(category => {
			const booksByCategory = books.filter(book => book.shelf === category);
			this.setState((currentState) => ({[category]: booksByCategory}))
		});
  }

  updateBookshelf = (book, shelf) => {
  	// console.log(shelf, book, this);
  }

  componentDidMount() {
		BooksAPI.getAll()
      .then((books) => {
      	this.updateBooks(books);
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
        		books={this.state[bookshelf.value]}
        		updateBookshelf={this.updateBookshelf} />
        ))}
      </div>
    );
  }
}

export default Bookshelves;
