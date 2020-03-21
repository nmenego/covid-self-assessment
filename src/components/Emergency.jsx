import React, {Component} from 'react';
import {Button} from "semantic-ui-react";

class Emergency extends Component {
	next = (e) => {
		e.preventDefault();
		this.props.next()
	}

	render() {
		return (
			<div className="col-sm-12 col-md-10 offset-md-1">
				<h1 className="text-center mt-5 mb-4">Call your nearest emergency department.</h1>
				<br/>
				<p>
					They will ask more questions to assess you further. You will be brought to the COVID-19 Isolation
					Area for admission or the Resuscitation Area of the hospital if you don’t want to be admitted.
				</p>
				<p>
					[This part is under construction, please contact DOH directly below.]
					<li><a href="/contact" role="link">Hotline Directory</a></li>
				</p>

				<div className="my-5 text-center">
					<Button onClick={this.next} className="btn btn-primary btn-lg" role="button">Restart
					Assessment</Button>
				</div>
			</div>
		)
	}
}

export default Emergency;