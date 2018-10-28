import React, { Component } from 'react';
import defaultBookshelves from './defaultBookshelves';
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';
import './Bookshelves.scss';

class Bookshelves extends Component {

	constructor() {
		super();
		this.state = {
			books: [],
			bookshelves: this.setStateBookshelves()
		}
	}

	/**
   * Add bookshelves from default object
   */
	setStateBookshelves = () => {
  	let categories = {};
  	defaultBookshelves
			.filter(bookshelve => bookshelve.show)
			.forEach(bookshelve => { categories[bookshelve.value] = []; });
		return categories;
  }

  /**
   * Update both states books and bookshelves
   */
	updateStateBookshelves = (books) => {
		let bookshelves = {};
		Object.keys(this.state.bookshelves).forEach(bookshelf => {
			const booksByCategory = books.filter(book => book.shelf === bookshelf);
			bookshelves[bookshelf] = booksByCategory;
		});

		this.setState(currentState => ({bookshelves, books}));
  }

  /**
   * Update fired by onChange
   */
  handleUpdateBookshelf = (book, shelf) => {
  	BooksAPI.update(book, shelf)
      .then((response) => {
      	book.shelf = shelf;
		  	const bookshelves = [...this.state.books, book];
		  	this.updateStateBookshelves([...(new Set(bookshelves))]);
      });
  }

  componentDidMount() {
		BooksAPI.getAll()
      .then((books) => {
      	this.updateStateBookshelves(books);
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
        		books={this.state.bookshelves[bookshelf.value]}
        		handleUpdateBookshelf={this.handleUpdateBookshelf} />
        ))}
      </div>
    );
  }
}

export default Bookshelves;
