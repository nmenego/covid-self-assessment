// NoTestWithSymptoms.jsx
import React, {Component} from 'react';
import {Button} from "semantic-ui-react";

class NoTestWithSymptoms extends Component {
	next = (e) => {
		e.preventDefault()
		this.props.next()
	}

	render() {
		return (
			<div>
				<h1 className="ui centered">You do not need to be tested for COVID-19.</h1>
				<p>There are many common viruses other than COVID-19 that can cause your symptoms. Based on your
					responses you do not need to be tested for COVID-19 at this time.</p>
				<p>DOH strongly urges anyone who has symptoms, including a cough, runny nose, fever or sore throat, to
					self-isolate for 14 days.</p>
				<p>To protect yourself while out in public, wash your hands frequently, and maintain a distance of about
					2 metres from others.</p>
				<p>If your symptoms worsen, or if you are concerned, go to [insert links]</p>
				<Button onClick={this.next} className="btn btn-primary btn-lg btn-block" role="button">Restart
					Assessment</Button>
			</div>
		)
	}
}

export default NoTestWithSymptoms;