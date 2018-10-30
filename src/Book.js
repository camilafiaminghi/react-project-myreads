import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ChangeBookshelf from './ChangeBookshelf';
import './Book.scss';

class Book extends PureComponent {
	static propTypes = {
	  book: PropTypes.object.isRequired,
	  handleUpdateBookshelf: PropTypes.func.isRequired,
	}

	render() {
		const book = this.props.book;
		const handleUpdateBookshelf = this.props.handleUpdateBookshelf;
		const bookImg = {backgroundImage: 'none'};
		if (book.hasOwnProperty('imageLinks')) {
			bookImg.backgroundImage = 'url(' + book.imageLinks.thumbnail + ')';
		}

		return (
			<li className="list-books-item">
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={bookImg}></div>
						<ChangeBookshelf
							book={book}
							handleUpdateBookshelf={handleUpdateBookshelf} />
					</div>
					<div className="book-content">
						<div className="book-title">
							{book.title}
						</div>
						{(book.hasOwnProperty('authors')) &&
							<div className="book-authors">
								{book.authors.map((author, index) => ((index > 0) ? `, ${author}` : author))}
							</div>
						}
					</div>
				</div>
			</li>
		);
	}
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleUpdateBookshelf: PropTypes.func.isRequired
};

export default Book;
