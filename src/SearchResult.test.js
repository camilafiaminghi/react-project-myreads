import React from 'react';
import SearchResult from './SearchResult';

describe('<SearchResult />', function() {
	const books = [];
	const selectedBooks = [];
	const handleUpdateBookshelf = jest.fn();
	const component = <SearchResult books={books} selectedBooks={selectedBooks} handleUpdateBookshelf={handleUpdateBookshelf} />;

	it('renders without crashing', () => {
		shallow(component);
	});

	it('renders without crashing', () => {
		const wrapper = shallow(component);
		expect(wrapper.find('.list')).toBeDefined();
	});
});
