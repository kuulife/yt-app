import React from "react";

const VideoDetail = (props) => {
	if (!props.iframes) {
		return (
			<div className="ui embed">
				<div className="ui active dimmer">
					<div className="ui massive text loader">Loading</div>
				</div>
			</div>
		);
	}
	const videoSrc = `https://www.youtube.com/embed/${props.iframes.id.videoId}`;
	return (
		<div>
			<div className="ui embed">
				<iframe title="video player" src={videoSrc} />
			</div>
			<div className="ui segment">
				<h4 className="ui header">{props.iframes.snippet.title}</h4>
				<p className="">{props.iframes.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
