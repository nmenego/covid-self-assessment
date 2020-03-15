// app.js
import React, {Component} from 'react';
import './App.css';
import MainForm from './components/MainForm';
import {Container} from 'semantic-ui-react';

class App extends Component {

	render() {
		return (
			<Container textAlign='center'>
				<p>Use this self-assessment tool to help determine whether you should be tested for COVID-19. You can
					complete this assessment for yourself or on behalf of someone else, if they are not able. Please
					note: You do not need to be tested for COVID-19 if in the past 14 days you have not traveled outside
					Canada or had contact with someone diagnosed as having COVID-19.</p>
				<p>We strongly urges anyone who has symptoms, including a cough, runny nose, fever or sore throat, to
					self-isolate for 14 days. To protect yourself while out in public, wash your hands frequently, and
					maintain a distance of about 2 metres from others. </p>
				<MainForm/>
			</Container>)
	}
}

export default App;