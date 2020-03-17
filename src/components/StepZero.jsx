// StepZero.jsx
import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

import translate from '../i18n/translate';
import { LOCALES } from '../i18n/locales';

class StepZero extends Component {
  changeLocale = (locale)=> {
    this.props.changeLocale(locale);
  }
	nextStep = (e) => {
		e.preventDefault()
		this.props.nextStep()
	}

	render() {
		const {values} = this.props;
		return (

			<div className="col-sm-12 col-md-10 offset-md-1">
				<h1 className="text-center mt-5 mb-4">{translate("step0.title")}</h1>
				<br/>
				<p>{translate("step0.message1")}</p>
				<p>{translate("step0.message2")}</p>
				<p>{translate("step0.message3")}</p>
				<div className="my-5 text-center">
					<Button onClick={this.nextStep} className="btn btn-primary btn-lg" role="button">{translate("step0.hero-button")}</Button>
          <p className="mt-3">{translate("step0.translate", {language:<a href="#" role="link" onClick={() => this.changeLocale(LOCALES.TAGALOG)}>Tagalog</a>})}</p>

				</div>
				<div>
					<p>{translate("step0.info")}</p>
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
						<li><a href="#">{translate("step0.faq")}</a></li>
					</ul>
				</div>
				<br/>
        <p><strong>{translate("step0.disclaimer")}:</strong>{translate("step0.disclaimer-message", {
            guidelines: <a href="https://www.doh.gov.ph/2019-nCov/interim-guidelines" role="link">DOH guidelines</a>,
            telegram: <span><a href="https://t.me/joinchat/EBf1xxafyu8E3Io4BlbjQg" role="link">Telegram</a> channel.</span>,
          })}
        </p>
      </div>
		)
	}
}


export default StepZero;