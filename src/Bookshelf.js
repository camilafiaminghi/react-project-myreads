import React from 'react';
import PropTypes from 'prop-types';
import './Bookshelf.scss';

const Bookshelf = ({category, books}) => {
	return (
		<section className="list-books-content">
			<h1 className="list-books-title">{category}</h1>
			<ul className="list-books">
				{books.map((book, index) => (
					<li key={index} className="list-books-item">{book.title}</li>
				))}
			</ul>
		</section>
	);
};

Bookshelf.propTypes = {
  category: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};

export default Bookshelf;
