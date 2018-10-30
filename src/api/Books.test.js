import * as BooksAPI from './Books';

describe('BooksAPI', function() {
	it('should load a list of books', () => {
		return BooksAPI.getAll()
	    .then(data => {
	      expect(data).toBeDefined();
	    });
  });
});
