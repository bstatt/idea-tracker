import React, { Component } from 'react';

class IdeaCard extends Component {
	render() {
		return(
				<div className="idea-card-container">
					<img className="idea-image" src={this.props.ideaImage}/>
					<h2>{this.props.idea}</h2>
					<p>{this.props.desc}</p>
					<a href="#">More Info</a>
				</div>
			)
	}
}

export default IdeaCard;