import React from 'react';
import PropTypes from 'prop-types';
import defaultBookshelves from './defaultBookshelves';
import './ChangeBookshelf.scss';

const ChangeBookshelf = ({book, handleUpdateBookshelf}) => {
	const shelf = (book.hasOwnProperty('shelf')) ? book.shelf : 'none';

	return (
		<div className="bookshelf-changer">
 				<select
 					value={shelf}
 					onChange={(event) => handleUpdateBookshelf(book, event.target.value)}>
 					<option value="move">Move to...</option>
 					{defaultBookshelves.map((bookshelf, index) => (
						<option
							key={index}
							value={bookshelf.value}>{bookshelf.label}</option>
					))}
				</select>
			</div>
	);
};

ChangeBookshelf.propTypes = {
  book: PropTypes.object.isRequired,
  handleUpdateBookshelf: PropTypes.func.isRequired
};

export default ChangeBookshelf;
