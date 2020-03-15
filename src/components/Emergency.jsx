// Emergency.jsx
import React, {Component} from 'react';
import {Button} from "semantic-ui-react";

class Emergency extends Component {

	next = (e) => {
		e.preventDefault()
		this.props.next()
	}

	render() {
		return (
			<div>
				<h1 className="ui centered">Please contact your nearest emergency department.</h1>
				<ul>
					<li>Self-isolate. That means don't go to any public places, stay at home, and don’t have any
						visitors. That means don't go to any public places, stay at home, and don’t have any visitors.
					</li>
					<li>Don’t share personal items like dishes, utensils, and towels and wash your hands often.</li>
					<li>Avoid touching your face as much as possible.</li>
				</ul>
				<Button onClick={this.next}>Restart Assessment</Button>
			</div>
		)
	}
}

export default Emergency;