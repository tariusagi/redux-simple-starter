import React from 'react';

// VideoDetail is a function component, for it doesn't maintain its own state.
// The video item is passed down from app's state. 
const VideoDetail = ({video}) => {
	if (!video) {
		// When the app render for the first time, no video is available, so we just
		// show a loading message.
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className='video-detail col-md-8'>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className='embed-responsive-item' src={url}></iframe>
			</div>
			<div className='details'>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;