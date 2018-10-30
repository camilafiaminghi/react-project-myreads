import React from 'react';
import ChangeBookshelf from './ChangeBookshelf';
import defaultBookshelves from './defaultBookshelves';

describe('<ChangeBookshelf />', function() {
	const book = {
		id: 123,
		title: 'The Linux Command Line',
		imageLinks: {
			thumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
		},
		authors: ['William E. Shotts, Jr.']
	};

	const handleUpdateBookshelf = jest.fn();

	it('renders without crashing', () => {
		shallow(<ChangeBookshelf book={book} handleUpdateBookshelf={handleUpdateBookshelf} />);
	});

	it('has select', () => {
		const wrapper = mount(<ChangeBookshelf book={book} handleUpdateBookshelf={handleUpdateBookshelf} />);
		const button = wrapper.find('select');
		button.simulate('change');
	});
});
