// app.js
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import MainForm from "./components/MainForm";
import Error404 from "./components/Error404";
import FAQPage from "./components/FAQPage";
import ContactPage from "./components/ContactPage";
import {Container} from 'semantic-ui-react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-160601011-1');

class App extends Component {

	render() {
		ReactGA.pageview(window.location.pathname + window.location.search);
		return (
			<BrowserRouter>
				<Container textAlign='center'>
					<Switch>
						<Route path="/" component={MainForm} exact/>
						<Route path="/faq" component={FAQPage}/>
						<Route path="/contact" component={ContactPage}/>
						<Route component={Error404}/>
					</Switch>
				</Container>
			</BrowserRouter>
		)
	}
}

export default App;