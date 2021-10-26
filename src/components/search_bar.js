import React, {Component} from 'react';

// SearchBar is implemented as a class component, for it needs its own state.
// If a component doesn't need its own state, then use function style instead.
class SearchBar extends Component {
	constructor(props) {
		super(props);
		// Initialize this component's state, search term, to an empty string.
		this.state = {term: ''};
	}

	render() {
		return (
			<input className='search-bar'
				// Set this input's value to this component state, search term, which
				// will be set by onChange event.
				value = {this.state.term}
				// Whenever onChange event trigger, first update this component state,
				// which is the search term, and then call onSearchTermChange prop
				// function, which was passed down from app.
				onChange = {event => {
					this.setState({term: event.target.value});
					this.props.onSearchTermChange(event.target.value);
				}}
			/>
		)
	}
}

export default SearchBar;