import React from 'react';
import SearchResult from './SearchResult';

describe('<SearchResult />', function() {
	const books = [];
	const handleUpdateBookshelf = jest.fn();

	it('renders without crashing', () => {
		shallow(<SearchResult books={books} handleUpdateBookshelf={handleUpdateBookshelf} />);
	});
});
