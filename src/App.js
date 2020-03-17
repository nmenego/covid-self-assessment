// app.js
import React, {Component} from 'react';
import './App.css';
import MainForm from './components/MainForm';
import {Container} from 'semantic-ui-react';

import { I18nProvider, LOCALES } from './i18n';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-160601011-1');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: LOCALES.ENGLISH,
    };
  }

  changeLocale = (locale) => {
    this.setState({locale:locale});
  }

	render() {
		ReactGA.pageview(window.location.pathname + window.location.search);
		return (
      <I18nProvider locale={this.state.locale}>
        <Container textAlign='center'>
          <MainForm changeLocale={this.changeLocale}/>
        </Container>
      </I18nProvider>
    )

	}
}

export default App;