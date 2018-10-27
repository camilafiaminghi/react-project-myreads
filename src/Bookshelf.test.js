import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import defaultBookshelves from './defaultBookshelves';

describe('<Bookshelf />', function() {
	const bookshelvesKeys = defaultBookshelves
			.filter(bookshelve => bookshelve.show)
			.map(bookshelve => (bookshelve.value));

	it('renders without crashing', () => {
		const books    = [];
		const category = bookshelvesKeys[0];
		shallow(<Bookshelf books={books} category={category} />);
	});
});
