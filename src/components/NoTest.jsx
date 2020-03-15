// NoTest.jsx
import React, {Component} from 'react';
import {Button} from "semantic-ui-react";

class NoTest extends Component {
	next = (e) => {
		e.preventDefault()
		this.props.next()
	}

	render() {
		return (
			<div>
				<h1 className="ui centered">You do not need to be tested for COVID-19.</h1>
				<p>However, there’s a chance you could get sick since it’s less than 14 days since your exposure. You
					should self-isolate until 14 days after the exposure. Self-isolation means don’t go to any public
					places, stay at home, and don’t have any visitors. Don’t share personal items like dishes, utensils
					and towels. Wash your hands often. If you have questions, visit [link].</p>
				<p>If you get any COVID-19 symptoms, take this self-assessment again. If you need information, go to
					[link].</p>
				<Button onClick={this.next}>Restart Assessment</Button>
			</div>
		)
	}
}

export default NoTest;