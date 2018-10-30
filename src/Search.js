import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './api/Books';
import SearchResult from './SearchResult';
import './Search.scss';

class Search extends Component {

	constructor() {
		super();
		this.state = {
			query: '',
			books: [],
			loading: false
		}
	}

	handleSearch = (query) => {
		this.setState(currentState => ({loading: true}));
		BooksAPI.search(query)
      .then((response) => {
      	if (!response.hasOwnProperty('error')) {
      		this.setState(currentState => ({
      			books: response,
      			loading: false
      		}));
      	} else {
      		this.setState(currentState => ({
      			books: [],
      			loading: false
      		}));
      	}
      });
	}

	updateQuery = (query) => {
		this.setState(() => ({
			query: query
		}));

		if (query.length >= 3) {
			this.handleSearch(query.trim());
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
				{(this.state.loading) && <p className="search-loading">Loading...</p>}
				{(!this.state.loading) &&
					<SearchResult books={books} handleUpdateBookshelf={handleUpdateBookshelf} />
				}
			</div>
		);
	}
}

export default Search;
