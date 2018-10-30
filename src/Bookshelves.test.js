import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Bookshelves from './Bookshelves';
import defaultBookshelves from './defaultBookshelves';

describe('<Bookshelves />', function() {
	let bookshelves = {};
	const bookshelvesKeys = defaultBookshelves
			.filter(bookshelf => bookshelf.show)
			.map(bookshelf => {
				bookshelves[bookshelf.value] = [];
				return bookshelf.value
			});

	const handleUpdateBookshelf = jest.fn();

	it('renders without crashing', () => {
		shallow(
			<MemoryRouter>
				<Bookshelves
					bookshelves={bookshelves}
					handleUpdateBookshelf={handleUpdateBookshelf} />
			</MemoryRouter>
		);
	});

	it(`render ${bookshelvesKeys.length} bookshelf`, () => {
		const wrapper = mount(
			<MemoryRouter>
				<Bookshelves
					bookshelves={bookshelves}
					handleUpdateBookshelf={handleUpdateBookshelf} />
			</MemoryRouter>
		);
		expect(wrapper.find('.bookshelf')).toHaveLength(bookshelvesKeys.length);
	});

	it('has link to search', () => {
		const wrapper = shallow(
				<Bookshelves
					bookshelves={bookshelves}
					handleUpdateBookshelf={handleUpdateBookshelf} />
		);
		const link = wrapper.find('.btn-add');
		link.simulate('click');
	});
});
