import React, { Component } from 'react';
import Bookshelves from './Bookshelves';

describe('<Bookshelves />', function() {
	it('renders without crashing', () => {
		shallow(<Bookshelves />);
	});

	it('render 3 bookshelf', () => {
		const wrapper = mount(<Bookshelves />);
		expect(wrapper.find('.list-books-content')).toHaveLength(3);
	});
});
