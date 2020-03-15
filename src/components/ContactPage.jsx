// ContactPage.jsx
import React, {Component} from 'react';
import {Button} from "semantic-ui-react";

class ContactPage extends Component {

	next = (e) => {
		e.preventDefault()
		this.props.next()
	}

	render() {
		return (
			<div>
				<h1 className="ui centered">Emergency Hotlines, Hospitals, and LGUs</h1>
				<h3>Please refer to the list below for the nearest hospitals and LGUs if you need help. We are
					continuing to update the list as we go, if you are a local hospital or clinic etc etc, you may reach
					out to us at admin@covid19sa-ph.com</h3>
				<h3>National Helplines</h3>
				<div>Department of Health - Philippines</div>
				<Button onClick={this.next}>See Contact Details</Button>
			</div>
		)
	}
}

export default ContactPage;