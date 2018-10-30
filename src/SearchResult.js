import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './SearchResult.scss';

const SearchResult = ({books, handleUpdateBookshelf}) => {
	return(
		<div className="search-result">
			<ul className="list">
				{books.map((book, index) => (
					<Book key={index} book={book} handleUpdateBookshelf={handleUpdateBookshelf} />
				))}
			</ul>
		</div>
	);
}

SearchResult.propTypes = {
  books: PropTypes.array.isRequired,
  handleUpdateBookshelf: PropTypes.func.isRequired
};

export default SearchResult;
