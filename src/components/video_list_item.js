import React from 'react';

// VideoListItem is a function component, for it doesn't maintain its own state.
// The videos item and onVideoSelect function are passed down from app thru
// VideoList and finally to this component.
const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		// Set onClick event handler to onVideoSelect (see app), so when user click
		// on this component, the coresponding video will be shown in the detail
		// frame (see video_detail.js).
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl}/>
				</div>

				<div className="video-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;