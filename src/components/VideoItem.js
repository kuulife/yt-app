import React from "react";
import "./VideoItem.css";
const VideoItem = (props) => {
	return (
		<div
			onClick={() => {
				props.onVideoSelect(props.video);
			}}
			className="video-item item"
		>
			<img
				alt={props.video.snippet.title}
				src={props.video.snippet.thumbnails.medium.url}
				className="ui  image"
			/>
			<div className="content">
				<a class="">{props.video.snippet.title}</a>
				<div class="description">Updated 10 mins ago</div>
			</div>
		</div>
	);
};

export default VideoItem;
