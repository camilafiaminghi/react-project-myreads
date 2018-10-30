import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Bookshelves from './Bookshelves';
import Search from './Search';
import App from './App';
import defaultBookshelves from './defaultBookshelves';
import * as BooksAPI from './api/Books';

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

	it('has state books', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.state().books).toEqual([]);
	});

	it('has state bookshelves', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.state().bookshelves).toEqual(bookshelves);
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

	it('search path', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={[ '/search' ]}>
				<Search
					handleUpdateBookshelf={handleUpdateBookshelf} />
			</MemoryRouter>
		);

	  expect(wrapper.find(Search)).toHaveLength(1);
	});

	it('expect setStateBookshelves return value', () => {
		const wrapper = shallow(<App />);
		const spy = jest.spyOn(wrapper.instance(), 'setStateBookshelves');
		spy.mockReturnValue(bookshelvesKeys);
	});
});
