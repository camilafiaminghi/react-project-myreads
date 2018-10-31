import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Debounce } from 'react-throttle';
import * as BooksAPI from './api/Books';
import SearchResult from './SearchResult';
import './Search.scss';

class Search extends Component {

	constructor() {
		super();
		this.state = {
			books: [],
			loading: false,
			message: ''
		}
	}

	static propTypes = {
		selectedBooks: PropTypes.array.isRequired,
	  handleUpdateBookshelf: PropTypes.func.isRequired
	}

	handleSearch = (query) => {
		this.setState(currentState => ({loading: true}));

		BooksAPI.search(query)
      .then((response) => {
      	const message = (!response.hasOwnProperty('error')) ? '' : 'Search term not found. Please try in other words.';
      	const books   = (!response.hasOwnProperty('error')) ? response : [];
      	const loading = false;

      	this.setState(currentState => ({message, loading, books}));
      });
	}

	updateQuery = (event) => {
		const query = event.target.value;

		if (query.length >= 3) {
			this.handleSearch(query.trim());
		} else if (query.length === 0) {
			this.setState(currentState => ({
				books: [],
				message: ''
			}));
		}
	}

	render() {
		const books = this.state.books;
		const handleUpdateBookshelf = this.props.handleUpdateBookshelf;

		return (
			<div className="search">
				<div className="search-bar">
					<Link
	          className="close-search"
	          to="/">Close</Link>
					<div className="search-input">
						<Debounce time="400" handler="onChange">
							<input
								onChange={(event) => this.updateQuery(event)}
								type="text"
								placeholder="Search by title or author" />
						</Debounce>
					</div>
				</div>
				{(this.state.message.length > 0) && <p className="search-message">{this.state.message}</p>}
				{(this.state.loading) && <p className="search-loading">Loading...</p>}
				{(!this.state.loading) &&
					<SearchResult
						books={books}
						handleUpdateBookshelf={handleUpdateBookshelf}
						selectedBooks={this.props.selectedBooks} />
				}
			</div>
		);
	}
}

export default Search;
