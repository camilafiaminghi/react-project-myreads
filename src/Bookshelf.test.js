import React from 'react';
import Bookshelf from './Bookshelf';
import defaultBookshelves from './defaultBookshelves';

describe('<Bookshelf />', function() {
	const bookshelvesKeys = defaultBookshelves
			.filter(bookshelve => bookshelve.show)
			.map(bookshelve => (bookshelve.value));

	const books    = [];
	const category = bookshelvesKeys[0];
	const handleUpdateBookshelf = jest.fn();
	const component = <Bookshelf books={books} category={category} handleUpdateBookshelf={handleUpdateBookshelf} />;

	it('renders without crashing', () => {
		shallow(component);
	});

	it('renders children', () => {
		const wrapper = shallow(component);
		expect(wrapper.find('.Bookshelf-title')).toBeDefined();
		expect(wrapper.find('.list')).toBeDefined();
	});
});
