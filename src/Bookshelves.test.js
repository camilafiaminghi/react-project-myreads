import React, { Component } from 'react';
import Bookshelves from './Bookshelves';
import defaultBookshelves from './defaultBookshelves';

describe('<Bookshelves />', function() {
	const bookshelvesKeys = defaultBookshelves
			.filter(bookshelve => bookshelve.show)
			.map(bookshelve => (bookshelve.value));

	it('renders without crashing', () => {
		shallow(<Bookshelves />);
	});

	it('has state keys with empty arrays', () => {
		const wrapper = mount(<Bookshelves />);
		expect(Object.keys(wrapper.state())).toEqual(bookshelvesKeys);
	});

	it(`render bookshelvesKeys.length bookshelf`, () => {
		const wrapper = mount(<Bookshelves />);
		expect(wrapper.find('.list-books-content')).toHaveLength(bookshelvesKeys.length);
	});
});
