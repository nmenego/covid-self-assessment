// StepZero.jsx
import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';

class StepZero extends Component {

	nextStep = (e) => {
		e.preventDefault()
		this.props.nextStep()
	}

	render() {
		const {values} = this.props;
		return (
			<Form>
				<h1 className="ui centered">Are you experiencing any of the following:</h1>
				<p>Use this self-assessment tool to help determine whether you should be tested for COVID-19. You can
					complete this assessment for yourself or on behalf of someone else, if they are not able.</p>
				<p>We strongly urge anyone who has symptoms, including a cough, runny nose, fever or sore throat, to
					self-isolate for 14 days.</p>
				<p>To protect yourself while out in public, wash your hands frequently, and maintain a distance of
					about 2 metres from others.</p>
				<ul>
					<li>severe difficulty breathing (e.g., struggling for each breath, speaking in single words)</li>
					<li>severe chest pain</li>
					<li>having a very hard time waking up</li>
					<li>feeling confused</li>
					<li>lost consciousness</li>
				</ul>
				<Button onClick={this.nextStep}>Launch Self-Assessment</Button>
				<p>Disclaimer: (Let's not get sued!!!) Fusce facilisis sapien eros, vitae efficitur risus auctor ac. Ut
					scelerisque tortor
					velit, eu tempor ligula egestas eget. In vehicula, massa eget fermentum ultricies, magna metus
					convallis tortor, eu tempor augue diam maximus purus. Cras convallis, massa in dignissim semper, sem
					dolor elementum leo, vel posuere orci nunc in ligula.</p>
				<p>Please contact your local health authorities. We have a list of hospitals and LGUs that are here to
					help answer your questions.</p>
			</Form>
		)
	}
}

export default StepZero;