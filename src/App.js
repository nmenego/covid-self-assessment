// app.js
import React, {Component} from 'react';
import './App.css';
import MainForm from './components/MainForm';
import {Container} from 'semantic-ui-react';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-160601011-1');

class App extends Component {

	render() {
		ReactGA.pageview(window.location.pathname + window.location.search);
		return (
			<Container textAlign='center'>
				<MainForm/>
			</Container>)
	}
}

export default App;