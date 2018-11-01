import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RouteNotFound from './RouteNotFound';

describe('<RouteNotFound />', function() {
	const location = {path: '/notMatch'};
	const component = <MemoryRouter><RouteNotFound location={location} /></MemoryRouter>;

	it('renders without crashing', () => {
		shallow(component);
	});

	it('has a link to home', () => {
		const wrapper = shallow(component);
		expect(wrapper.find('a')).toBeDefined();
	});
});
