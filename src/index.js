import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Google YouTube Data API v3.
const API_KEY ='AIzaSyA4NOZ8duFv7NxZRZEp6AxpLILEcdT7b6g';

// Create a new root (app) component. It should return some HTML.
// Note: we use JSX syntax in this project to embed HTML in JS code.
class App extends Component {
	constructor(props) {
		super(props);

		// Initialize this app's state.
		this.state = {
			videos: [],
			selectedVideo: null			
		};

		// Search for some videos to show at the beginning.
		this.videoSearch('cycling');
	}

	// Use YouTube API to search for videos base on the given term.
	videoSearch =	term => YTSearch( 
		{ key: API_KEY, term: term },
		videos => this.setState( { videos, selectedVideo: videos[0] } )
	)

	// Since App is a child of React's Component, its render method will be called
	// when the page first loaded, and everytime the state is changed. It must
	// return HTML code to be rendered into the web page.
	render() {
		// Use lodash's debounce to throttle searchs to 300ms between each.
		const videoSearch = _.debounce( this.videoSearch, 300 );

		return (
			<div>
				{/* SearchBar is a class component, so the following line does:
				1. Create a props object and set its onSearchTermChange property to
				   point to videoSearch() function (defined above).
				2. Create an instance of SearchBar and call its constructor with props.
				3. The call to its constructor also, for the first time, invoke its
				   render() method. 
				4. Later on, whenever user type in the search bar's input element, its
				   onChange event will be triggered, which is bound to call SearchBar's
					 onInputChange() method, which in turn calls its onSearchTermChange
					 function property of its props, which points to the debounced
					 videoSearch() debounced function, which execute YoutTube API and 
					 update this app's state, which causes this app's render() method to 
					 be called along with all of its child component's render() methods 
					 (SearchBar, VideoDetail, VideoList and VideoListItem)*/}
				<SearchBar onSearchTermChange={videoSearch}/>
				{/* VideoDetail has its video prop bound to this app's selectedVideo 
				state. This state can be changed either by videoSearch() function or by
				VideoList's onVideoSelect, which in turns triggered by VideoListItem's
				onClick event */}
				<VideoDetail video={this.state.selectedVideo}/>
				{/* VideoList has its videos list bound to this app's videos state. This
				state will be changed by videoSearch() function. It also pass its
				onVideoSelect prop function down to its child, VideoListItem, which
				call that prop function when its onClick event triggers */}
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}
				/>
			</div>
		)
	}
}

// Take this component's output and put in into web page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));