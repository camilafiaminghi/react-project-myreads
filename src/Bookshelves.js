import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';
import './Bookshelves.scss';
import defaultBookshelves from './defaultBookshelves';

const Bookshelves = ({bookshelves, handleUpdateBookshelf}) => {
	return (
		<div className="bookshelves">
			<div className="bookshelves-title">
      	<h1>MyReads</h1>
      </div>
      {defaultBookshelves.filter((bookshelf) => bookshelf.show).map((bookshelf, index) => (
      	<Bookshelf
      		key={index}
      		category={bookshelf.label}
      		books={bookshelves[bookshelf.value]}
      		handleUpdateBookshelf={handleUpdateBookshelf} />
      ))}
      <div className="link-search">
      	<Link
          className="link-search"
          to="/search">Add a book</Link>
      </div>
    </div>
	);
}

Bookshelves.propTypes = {
  bookshelves: PropTypes.object.isRequired,
  handleUpdateBookshelf: PropTypes.func.isRequired
};

export default Bookshelves;
