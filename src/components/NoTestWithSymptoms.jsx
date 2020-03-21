import React, {Component} from 'react';
import {Button} from "semantic-ui-react";

class NoTestWithSymptoms extends Component {
	next = (e) => {
		e.preventDefault();
		this.props.next();
	};

	render() {
		return (
			<div className="col-sm-12 col-md-10 offset-md-1">
				<h1 className="text-center mt-5 mb-4">You do not need to be tested for COVID-19.</h1>
				<br/>
				<p>
					There are many common viruses other than COVID-19 that can cause your symptoms. Based on your
					responses you do not need to be tested for COVID-19 at this time.
				</p>
				<p>
					<strong>DOH</strong> strongly urges anyone who has symptoms, including a cough, runny nose, fever or sore throat, to
					self-isolate for 14 days.
				</p>
				<p>
					To protect yourself while out in public, wash your hands frequently, and maintain a distance of about
					2 metres from others.
				</p>

				<div className="my-5 text-center">
					<Button onClick={this.next} className="btn btn-primary btn-lg" role="button">Restart
					Assessment</Button>
				</div>
			</div>
		)
	}
}

export default NoTestWithSymptoms;