import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as BooksAPI from './api/Books';
import Bookshelves from './Bookshelves';
import Search from './Search';
import RouteNotFound from './RouteNotFound';
import defaultBookshelves from './defaultBookshelves';
import './App.scss';

class App extends Component {
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

	async componentDidMount() {
		const books = await BooksAPI.getAll();
  	this.updateStateBookshelves(books);
  }

  render() {
  	return (
      <div className="app">
      	<Switch>
	      	<Route exact path='/' render={() => (
	          <Bookshelves
	          	bookshelves={this.state.bookshelves}
	          	handleUpdateBookshelf={this.handleUpdateBookshelf} />
	        )} />
	        <Route path='/search' render={({history}) => (
	          <Search
	          	selectedBooks={this.state.books}
	          	handleUpdateBookshelf={this.handleUpdateBookshelf} />
	        )} />
	        <Route path='/search' render={({history}) => (
	          <Search
	          	selectedBooks={this.state.books}
	          	handleUpdateBookshelf={this.handleUpdateBookshelf} />
	        )} />
	        <Route component={RouteNotFound} />
	      </Switch>
      </div>
    );
  }
}

export default App;
