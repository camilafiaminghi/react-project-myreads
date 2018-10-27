import React from 'react';
import Book from './Book';
import defaultBookshelves from './defaultBookshelves';

describe('<Book />', function() {
	const book = {
		title: 'The Linux Command Line',
		imageLinks: {
			thumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
		},
		authors: ['William E. Shotts, Jr.']
	};

	const updateBookshelf = jest.fn();

	it('renders without crashing', () => {
		shallow(<Book book={book} updateBookshelf={updateBookshelf} />);
	});

	it('renders children', () => {
		const wrapper = shallow(<Book book={book} updateBookshelf={updateBookshelf} />);
		expect(wrapper.find('.book-title')).toBeDefined();
		expect(wrapper.find('.book-authors')).toBeDefined();
		expect(wrapper.find('.book-cover')).toBeDefined();
	});
});
