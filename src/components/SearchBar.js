import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };
	onInputChange = (e) => {
		this.setState({ term: e.target.value });
	};

	onFormSubmit = (event) => {
		this.props.onSubmitMe(this.state.term);
		event.preventDefault();
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Seach Videos</label>
						<input
							value={this.state.term}
							onChange={this.onInputChange}
							type="text"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
