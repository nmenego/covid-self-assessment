// StepZero.jsx
import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class StepZero extends Component {

	nextStep = (e) => {
		e.preventDefault()
		this.props.nextStep()
	}

	faqPage = (e) => {
		e.preventDefault()
		this.props.faqPage()
	}

	contactPage = (e) => {
		e.preventDefault()
		this.props.contactPage()
	}

	render() {
		const {values} = this.props;
		return (

			<div className="col-sm-12 col-md-10 offset-md-1">
				<h1 className="text-center mt-5 mb-4">COVID-19 Self-Assessment</h1>
				<br/>
				<p>
					Do you need to be tested for COVID-19 (also known as novel coronavirus)?
				</p>
				<p>
					If you have fever, cough, runny nose, or sore throat, the Department of Health (DOH) encourages you to self-isolate for 14 days. 
				</p>
				<p>
					If you have to go out, wash your hands frequently and keep a distance of 2 metres from others (social distancing).
				</p>
				<div className="my-5 text-center">
					<Button onClick={this.nextStep} className="btn btn-primary btn-lg" role="button">Start the
						Self-Assessment</Button>
					<p className="mt-3">This is also available in <a href="#" role="link">Tagalog</a>, more regional
						languages will be available soon.</p>
				</div>
				<div>
					<p>For more information about COVID-19 or novel coronavirus, visit the following:</p>
					<ul>
						<li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" role="link">World Health
							Organization</a> – World Health
							Organization’s official webpage regarding COVID-19
						</li>
						<li><a href="https://www.doh.gov.ph/2019-nCoV" role="link">Department of Health</a> – Learn about
							COVID-19
							and actions being taken to protect the health of Filipinos
						</li>
						<li>Department of Health’s official social media channels:
							<ul>
								<li><a href="https://www.facebook.com/OfficialDOHgov" role="link">Facebook</a></li>
								<li><a href="https://twitter.com/DOHgovph" role="link">Twitter</a></li>
								<li><a href="http://bit.ly/DOHPhCOVID-19" role="link">Viber</a></li>
							</ul>
						</li>
						<li><a href="#" onClick={this.faqPage} role="link">Frequently Asked Questions</a></li>
						<li><a href="#" onClick={this.contactPage} role="link">Hotline Directory</a></li>
					</ul>
				</div>
				<br/>
				<p><strong>Disclaimer:</strong> Information on this website is adapted from <a href="https://www.doh.gov.ph/2019-nCov/interim-guidelines" role="link">DOH guidelines</a> for triaging COVID-19
					cases. This web site is not endorsed by, directly affiliated with, maintained, authorized, or
					sponsored by the Department of Health. We do not provide professional
					medical advice. If you find any errors or inaccuracies on this website, please submit feedback to
					our <a href="https://t.me/joinchat/EBf1xxafyu8E3Io4BlbjQg" role="link">Telegram</a> channel.</p>
			</div>
		)
	}
}

export default StepZero;