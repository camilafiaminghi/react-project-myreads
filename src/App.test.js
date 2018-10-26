import React, { Component } from 'react';
import { MemoryRouter } from 'react-router';
import Bookshelves from './Bookshelves';
import App from './App';

describe('<App />', function() {
	it('renders without crashing', () => {
		const wrapper = mount(
	    <MemoryRouter initialEntries={[ '/random' ]}>
	      <App/>
	    </MemoryRouter>
	  );

	  expect(wrapper.find(Bookshelves)).toHaveLength(0);
	});
});
