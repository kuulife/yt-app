import React from "react";
import VideoItem from "./VideoItem";
const VideoList = (props) => {
	const renderedList = props.mp4.map((video) => {
		return (
			<VideoItem
				key={video.id.videoId}
				video={video}
				onVideoSelect={props.onVideoSelect}
			/>
		);
	});

	return (
		<div className="ui relaxed divided list">
			{renderedList}
		</div>
	);
};

export default VideoList;
