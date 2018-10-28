import React, { Component } from 'react';
import defaultBookshelves from './defaultBookshelves';
import PropTypes from 'prop-types';
import './ChangeBookshelf.scss';

class ChangeBookshelf extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'move'
		}
	}

	static propTypes = {
		book: PropTypes.object.isRequired,
		handleUpdateBookshelf: PropTypes.func.isRequired
	}

	handleChange = (event) => {
		this.props.handleUpdateBookshelf(this.props.book, event.target.value);
	}

	render() {
		return (
			<select onChange={(event) => this.handleChange(event)} value={this.state.value}>
				<option value="move" disabled="">Move to...</option>
				{defaultBookshelves.map((bookshelf, index) => (
					(bookshelf.value !== this.props.book.shelf) &&
					(<option key={index} value={bookshelf.value}>{bookshelf.label}</option>)
				))}
			</select>
		)
	}
}

export default ChangeBookshelf;