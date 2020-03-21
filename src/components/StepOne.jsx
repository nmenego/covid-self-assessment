// StepOne.jsx
import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class StepOne extends Component {

	yesStep = (e) => {
		e.preventDefault();
		this.props.handleChange('hasSymptoms', true);
		this.props.nextStep();
	};

	noStep = (e) => {
		e.preventDefault();
		this.props.handleChange('hasSymptoms', false);
		this.props.nextStep();
	};

	render() {
		return (
			<div className="col-sm-12 col-md-8 offset-md-2">
				<div className="progress-status text-center my-5">
					<h4 className="mb-3">Please answer the question below</h4>
					<div className="prog prog-filled"></div>
				</div>
				{/* <div className="progress-status text-center my-5" role="progressbar" aria-valuenow="20%">
					<h4 className="mb-3">Question 1 of 5</h4>
					<div className="prog prog-filled"></div>
					<div className="prog prog-empty"></div>
					<div className="prog prog-empty"></div>
					<div className="prog prog-empty"></div>
					<div className="prog prog-empty"></div>
				</div> */}

				{/*</div>*/}
				<p className="question-text">Are you experiencing any of the following:</p>
				{/*<Form.Field>*/}
				{/*	<input*/}
				{/*		type='checkbox'*/}
				{/*		onChange={this.props.handleChange('firstName')}*/}
				{/*		defaultValue={values.firstName}*/}
				{/*	/>*/}
				{/*	<label>severe difficulty breathing (e.g., struggling for each breath, speaking in single words)</label>*/}
				{/*</Form.Field>*/}
				<ul className="question-ul" role="list">
					<li>Fever</li>
					<li>Cough</li>
					<li>Shortness of breath or difficulty breathing</li>
					<li>Diarrhea</li>
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
				</div>
			</div>
		)
	}
}

export default StepOne;