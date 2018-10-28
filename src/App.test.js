import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Bookshelves from './Bookshelves';
import App from './App';
import defaultBookshelves from './defaultBookshelves';

describe('<App />', function() {
	let bookshelves = {};
	const bookshelvesKeys = defaultBookshelves
			.filter(bookshelf => bookshelf.show)
			.map(bookshelf => {
				bookshelves[bookshelf.value] = [];
				return bookshelf.value
			});

	const handleUpdateBookshelf = jest.fn();

	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('initial path', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={[ '/' ]}>
				<Bookshelves
					bookshelves={bookshelves}
					handleUpdateBookshelf={handleUpdateBookshelf} />
			</MemoryRouter>
		);

	  expect(wrapper.find(Bookshelves)).toHaveLength(1);
	});
});
