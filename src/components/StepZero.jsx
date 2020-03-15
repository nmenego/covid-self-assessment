// StepZero.jsx
import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class StepZero extends Component {

	nextStep = (e) => {
		e.preventDefault()
		this.props.nextStep()
	}

	render() {
		const {values} = this.props;
		return (

			<div className="col-sm-12 col-md-10 offset-md-1">
				<h1 className="text-center mt-5 mb-4">COVID-19 Self-Assessment</h1>
				<br/>
				<p>
					Check if you need to be tested for COVID-19. You can also help others use this tool if they are
					not able
				</p>
				<p>
					DOH strongly urges anyone who has symptoms, including a cough, runny nose, fever or sore throat,
					to self-isolate for 14 days.
				</p>
				<p>
					To protect yourself while out in public, wash your hands frequently, and maintain a distance of
					about 2 metres from others.
				</p>
				<div className="my-5 text-center">
					<Button onClick={this.nextStep} className="btn btn-primary btn-lg" role="button">Launch
						Self-Assessment</Button>
					<p className="mt-3">This is also available in <a href="#" role="link">Tagalog</a>, more regional
						languages will be available soon.</p>
				</div>
				<div>
					<p>If you have no symptoms or exposure concerns, but have questions about COVID-19 or novel
						coronavirus,
						please visit the following resources:</p>
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
						<li><a href="#">Frequently Asked Questions</a></li>
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