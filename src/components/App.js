import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../Api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	onTermSubmit = async (term) => {
		const response = await youtube.get("/search", {
			params: {
				q: term,
			},
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	componentDidMount() {
        const liOfVideos = ['exploring indonesia','people are awesome','memories maroon 5','go pro','nature','iphone 11']
        const vid = liOfVideos[ Math.floor(Math.random() * liOfVideos.length)];
        console.log(vid)
		this.onTermSubmit(vid);
	}

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};
	render() {
		return (
			<div className="ui container">
				<SearchBar onSubmitMe={this.onTermSubmit} />
				<div className="ui grid">
					<div className="eleven wide column">
						<VideoDetail iframes={this.state.selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList
							mp4={this.state.videos}
							onVideoSelect={this.onVideoSelect}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
