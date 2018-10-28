import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Search from './Search';

describe('<Search />', function() {
	const handleUpdateBookshelf = jest.fn();

	it('renders without crashing', () => {
		shallow(<MemoryRouter><Search handleUpdateBookshelf={handleUpdateBookshelf} /></MemoryRouter>);
	});

	it('has an input type text', () => {
		const wrapper = shallow(<MemoryRouter><Search  handleUpdateBookshelf={handleUpdateBookshelf} /></MemoryRouter>);
		expect(wrapper.find('input[type="text"]')).toBeDefined();
	});
});
