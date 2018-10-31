import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './SearchResult.scss';

const SearchResult = ({selectedBooks, books, handleUpdateBookshelf}) => {
	const filteredBooks = books.map((book) => {
		const filteredBook = selectedBooks.filter((selectedBook) => (selectedBook.id === book.id))[0];
		return (filteredBook) ? filteredBook : book;
	});

	return(
		<div className="search-result">
			<ul className="list">
				{filteredBooks.map((book, index) => (
					<Book
						key={index}
						book={book}
						handleUpdateBookshelf={handleUpdateBookshelf} />
				))}
			</ul>
		</div>
	);
}

SearchResult.propTypes = {
	selectedBooks: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  handleUpdateBookshelf: PropTypes.func.isRequired
};

export default SearchResult;
