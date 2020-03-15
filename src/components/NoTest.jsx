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
			<div className="col-sm-12 col-md-10 offset-md-1">
				<h1 className="text-center mt-5 mb-4">You do not need to be tested for COVID-19.</h1>
				<br/>
				<p>
					However, there’s a chance you could get sick since it’s less than 14 days since your exposure. You
					should self-isolate until 14 days after the exposure. Self-isolation means don’t go to any public
					places, stay at home, and don’t have any visitors. Don’t share personal items like dishes, utensils
					and towels. Wash your hands often. If you have questions, visit [link].
				</p>
				<p>
					If you get any COVID-19 symptoms, take this self-assessment again. If you need information, go to
					[link].
				</p>

				<div className="my-5 text-center">
					<Button onClick={this.next} className="btn btn-primary btn-lg" role="button">Restart
					Assessment</Button>
				</div>
			</div>
		)
	}
}

export default NoTest;