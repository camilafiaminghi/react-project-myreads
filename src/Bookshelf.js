import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './Bookshelf.scss';

const Bookshelf = ({category, books, handleUpdateBookshelf}) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{category}</h2>
			<ol className="list">
				{books.map((book, index) => (
					<Book key={index} book={book} handleUpdateBookshelf={handleUpdateBookshelf} />
				))}
			</ol>
		</div>
	);
};

Bookshelf.propTypes = {
  category: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  handleUpdateBookshelf: PropTypes.func.isRequired
};

export default Bookshelf;
