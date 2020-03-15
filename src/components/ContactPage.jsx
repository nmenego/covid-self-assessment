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
			<div className="col-sm-12 col-md-10 offset-md-1">
				<h1 className="text-center mt-5 mb-4">Emergency Hotlines, Hospitals, and LGUs</h1>
				<br/>
				<p>Please refer to the list below for the nearest hospitals and LGUs if you need help. We are
					continuing to update the list as we go, if you are a local hospital or clinic etc etc, you may reach
					out to us at <a href="https://t.me/joinchat/EBf1xxafyu8E3Io4BlbjQg" role="link" target="_blank">Telegram</a>
				</p>
				
				<div className="row">
					<div className="my-3">
						<div className="contact-group">
							<h3 className="group-category">National Helplines</h3>
							<div className="contact-details">
								<p className="contact-name">
									<strong>Department of Health - Philippines</strong>
								</p>
								<p className="contact-numbers">
									(02)8-651-7800 loc 1149-1150
								</p>
							</div>
						</div>
					</div>
				</div>

				<p>We're still updating this page.</p>
			</div>
		)
	}
}

export default ContactPage;