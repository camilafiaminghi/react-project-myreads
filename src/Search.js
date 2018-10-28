import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchResult from './SearchResult';
import './Search.scss';

class Search extends Component {

	constructor() {
		super();
		this.state = {
			query: '',
			books: [],
			response: {}
		}
	}

	handleSearch = (query) => {
		BooksAPI.search(query)
      .then((response) => {
      	if (!response.hasOwnProperty('error')) {
      		this.setState(currentState => ({books: response}));
      	} else {
      		this.setState(currentState => ({books: []}));
      	}
      });
	}

	updateQuery = (query) => {
		this.setState(() => ({
			query: query.trim()
		}));

		if (query.length > 3) {
			this.handleSearch(query);
		} else if (query.length === 0) {
			this.setState(currentState => ({books: []}));
		}
	}

	render() {
		const query = this.state.query;
		const books = this.state.books;
		const handleUpdateBookshelf = this.props.handleUpdateBookshelf;

		return (
			<div className="search">
				<div className="search-bar">
					<Link
	          className="close-search"
	          to="/">Close</Link>
					<div className="search-input">
						<input
							onChange={(event) => this.updateQuery(event.target.value)}
							value={query}
							type="text"
							placeholder="Search by title or author" />
					</div>
				</div>
				<SearchResult books={books} handleUpdateBookshelf={handleUpdateBookshelf} />
			</div>
		);
	}
}

export default Search;
