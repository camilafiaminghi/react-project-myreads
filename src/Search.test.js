import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Search from './Search';

describe('<Search />', function() {
	const handleUpdateBookshelf = jest.fn();
	const selectedBooks = [];
	const component = <MemoryRouter><Search selectedBooks={selectedBooks} handleUpdateBookshelf={handleUpdateBookshelf} /></MemoryRouter>;

	it('renders without crashing', () => {
		shallow(component);
	});

	it('has an input type text', () => {
		const wrapper = shallow(component);
		expect(wrapper.find('input[type="text"]')).toBeDefined();
	});

	it('input has on change', () => {
		const wrapper = mount(component);
		const input = wrapper.find('input[type="text"]');
		input.simulate('change');
	});

	it('has link to home', () => {
		const wrapper = shallow(component);
		const link = wrapper.find('.close-search');
		expect(link).toBeDefined();
	});
});
