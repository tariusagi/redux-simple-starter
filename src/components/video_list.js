import React from 'react';
import VideoListItem from './video_list_item';

// VideoList is a function component, for it doesn't maintain its own state.
// The videos list and onVideoSelect function are passed down from app.
const VideoList = ({videos, onVideoSelect}) => {
	// Use array's map() function to assign a callback for each element in the
	// videos list, which is a single video object. The callback in this case is
	// a VideoListItem function component. So for each video in the list, a call
	// to VideoListItem will be made, to render that video item. This method is
	// better than looping thru the array, because it avoid coding errors.
	const videoItems = videos.map(video => (
		<VideoListItem 
			key={video.etag} 
			video={video}
			onVideoSelect={onVideoSelect}
		/>
	));

	return (
		<ul className = 'col-md-4 list-group'>
			{videoItems}
		</ul>
	);
};

export default VideoList;