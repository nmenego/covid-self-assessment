import React, {Component} from 'react';
import {Button} from "semantic-ui-react";

class NoTest extends Component {

	render() {
		return (
			<div className="col-sm-12 col-md-10 offset-md-1">
				<h1 className="text-center mt-5 mb-4">You do not need to be tested for COVID-19.</h1>
				<br/>
				<p>Please go to the correct clinic if you have other symptoms.</p>

				<div className="my-5 text-center">
					<Button onClick={this.props.next} className="btn btn-primary btn-lg" role="button">Restart
					Assessment</Button>
				</div>
			</div>
		)
	}
}

export default NoTest;