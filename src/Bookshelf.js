import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './Bookshelf.scss';

const Bookshelf = ({category, books, updateBookshelf}) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{category}</h2>
			<ol className="books-grid">
				{books.map((book, index) => (
					<Book key={index} book={book} updateBookshelf={updateBookshelf} />
				))}
			</ol>
		</div>
	);
};

Bookshelf.propTypes = {
  category: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateBookshelf: PropTypes.func.isRequired
};

export default Bookshelf;
