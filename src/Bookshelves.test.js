import React from 'react';
import Bookshelves from './Bookshelves';
import defaultBookshelves from './defaultBookshelves';
import defaultBooks from './defaultBooks';

describe('<Bookshelves />', function() {
	const bookshelvesKeys = defaultBookshelves
			.filter(bookshelve => bookshelve.show)
			.map(bookshelve => (bookshelve.value));

	it('renders without crashing', () => {
		shallow(<Bookshelves />);
	});

	it(`render bookshelvesKeys.length bookshelf`, () => {
		const wrapper = mount(<Bookshelves />);
		expect(wrapper.find('.bookshelf')).toHaveLength(bookshelvesKeys.length);
	});
});
