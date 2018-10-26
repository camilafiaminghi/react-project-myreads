import React, { Component } from 'react';
import { MemoryRouter, Route } from 'react-router';
import Bookshelves from './Bookshelves';
import App from './App';

describe('<App />', function() {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('initial path', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={[ '/' ]}>
				<Bookshelves />
			</MemoryRouter>
		);

	  expect(wrapper.find(Bookshelves)).toHaveLength(1);
	});
});
