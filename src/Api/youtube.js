import axios from "axios";
const KEY = "AIzaSyAj34PBDxpphD6x2G5qH2prwvnXhBsKOgc";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 25,
		key: KEY,
	},
});
