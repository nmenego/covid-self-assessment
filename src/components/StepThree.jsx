import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class StepThree extends Component {
	yesStep = (e) => {
		e.preventDefault();
		this.props.handleChange('hasExposure', true);
		this.props.nextStep();
	};

	noStep = (e) => {
		e.preventDefault();
		this.props.handleChange('hasExposure', false);
		this.props.nextStep();
	};

	render() {
		return (
			<div className="col-sm-12 col-md-8 offset-md-2">
				<div className="progress-status text-center my-5">
					<h4 className="mb-3">Please answer the question below</h4>
					<div className="prog prog-filled"></div>
				</div>
				{/* <div className="progress-status text-center my-5" role="progressbar" aria-valuenow="60%">
					<h4 className="mb-3">Please answer the question below</h4>
					<div className="prog prog-filled"></div>
					<div className="prog prog-filled"></div>
					<div className="prog prog-filled"></div>
					<div className="prog prog-empty"></div>
					<div className="prog prog-empty"></div>
				</div> */}
				<p className="question-text">
					Were you exposed to someone who has been confirmed as having COVID-19?
				</p>
				<ul className="question-ul" role="list">
					<li>Providing direct care for COVID-19 patient</li>
					<li>Working together or staying in the same close environment of a COVID-19</li>
					<li>Traveling together with COVID-19 patient in any kind of conveyance</li>
					<li>Living in the same household as a COVID-19 patient</li>
					<li>Health worker in a facility where a COVID-19 patient was managed</li>
				</ul>
				<div className="row mt-5">
					<div className="col-sm-12 col-md-6 my-2">
						<Button onClick={this.noStep} className="btn btn-primary btn-lg btn-block"
								role="button">NO</Button>
					</div>
					<div className="col-sm-12 col-md-6 my-2">
						<Button onClick={this.yesStep} className="btn btn-primary btn-lg btn-block"
								role="button">YES</Button>
					</div>
					<div className="col-sm-12 mt-5 pt-5 text-center btn-back">
						<Button onClick={this.props.prevStep} className="btn btn-secondary btn-lg" role="button">Previous Question</Button>
					</div>
				</div>
			</div>
		)
	}
}

export default StepThree;