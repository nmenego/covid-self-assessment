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
				<p>Please refer to the list below for the nearest hospitals and LGUs if you need help. We are
					continuing to update the list as we go, if you are a local hospital or clinic etc etc, you may reach
					out to us at <a href="https://t.me/joinchat/EBf1xxafyu8E3Io4BlbjQg">Telegram</a></p>
				<h3>National Helplines</h3>
				<div>Department of Health - Philippines (02)8-651-7800 loc 1149-1150</div>

				<div>This part is under construction</div>
				<Button onClick={this.next} className="btn btn-primary btn-lg btn-block" role="button">Restart
					Assessment</Button>
			</div>
		)
	}
}

export default ContactPage;