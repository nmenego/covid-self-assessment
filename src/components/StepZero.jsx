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
			<div>
				<h1 className="ui centered">COVID-19 Self-assessment for Philippines</h1>
				<div>
					<p>Check if you need to be tested for COVID-19. You can also help others use this tool if they are
						not
						able. </p>
					<p>DOH strongly urges anyone who has symptoms, including a cough, runny nose, fever or sore throat,
						to <a
							href="https://www.doh.gov.ph/sites/default/files/health-update/DM-Interim%20Guidelines%20for%20Home%20Quarantine.pdf">self-isolate</a> for
						14 days.</p>
					<p>To protect yourself while out in public, wash your hands frequently, and maintain a distance of
						about
						2 metres from others.</p>
					<Button onClick={this.nextStep}>Launch Self-Assessment</Button>
				</div>

				<div>
					<p>If you have no symptoms or exposure concerns, but have questions about COVID-19 or novel
						coronavirus,
						please visit the following resources:</p>
					<ul>
						<li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">World Health
							Organization</a> – World Health
							Organization’s official webpage regarding COVID-19
						</li>
						<li><a href="https://www.doh.gov.ph/2019-nCoV">Department of Health</a> – Learn about COVID-19
							and actions being taken to protect the health of Filipinos
						</li>
						<li>Department of Health’s official social media channels:
							<ul>
								<li><a href="https://www.facebook.com/OfficialDOHgov"></a>Facebook</li>
								<li><a href="https://twitter.com/DOHgovph"></a>Twitter</li>
								<li><a href="http://bit.ly/DOHPhCOVID-19"></a>Viber</li>
							</ul>
						</li>
						<li><a href="#">Frequently Asked Questions</a></li>
					</ul>
				</div>

				<div>
					<p>Disclaimer: Fusce facilisis sapien eros, vitae efficitur risus auctor ac.
						Ut
						scelerisque tortor
						velit, eu tempor ligula egestas eget. In vehicula, massa eget fermentum ultricies, magna metus
						convallis tortor, eu tempor augue diam maximus purus. Cras convallis, massa in dignissim semper,
						sem
						dolor elementum leo, vel posuere orci nunc in ligula.</p>
					<p>Please contact your local health authorities. We have a list of hospitals and LGUs that are here
						to help answer your questions.</p>
				</div>
			</div>
		)
	}
}

export default StepZero;