import React from 'react';
import PropTypes from 'prop-types';
import ChangeBookshelf from './ChangeBookshelf';
import './Book.scss';

const Book = ({book, updateBookshelf}) => {
	const bookImg = {backgroundImage: 'url(' + book.imageLinks.thumbnail + ')'};

	return (
		<li className="list-books-item">
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={bookImg}></div>
					<div className="book-shelf-changer">
						<ChangeBookshelf book={book} updateBookshelf={updateBookshelf} />
					</div>
					<div className="book-title">
						{book.title}
					</div>
					<div className="book-authors">
						{book.authors.map((author, index) => ((index > 0) ? `, ${author}` : author))}
					</div>
				</div>
			</div>
		</li>
	);
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookshelf: PropTypes.func.isRequired
};

export default Book;
