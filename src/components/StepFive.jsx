// StepFive.jsx
import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class StepFive extends Component {
	yesStep = (e) => {
		e.preventDefault()
		this.props.yesStep()
	}

	noStep = (e) => {
		e.preventDefault()
		this.props.noStep()
	}

	back = (e) => {
		e.preventDefault();
		this.props.back();
	}

	render() {

		return (
			<div className="col-sm-12 col-md-8 offset-md-2">
				<div className="progress-status text-center my-5">
					<h4 className="mb-3">Please answer the question below</h4>
					<div className="prog prog-filled"></div>
				</div>
				{/* <div className="progress-status text-center my-5" role="progressbar" aria-valuenow="40%">
					<h4 className="mb-3">Please answer the question below</h4>
					<div className="prog prog-filled"></div>
					<div className="prog prog-filled"></div>
					<div className="prog prog-empty"></div>
					<div className="prog prog-empty"></div>
					<div className="prog prog-empty"></div>
				</div> */}
				<p className="question-text">Do you have symptoms of respiratory illness?
				</p>
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
						<Button onClick={this.back} className="btn btn-secondary btn-lg" role="button">Previous Question</Button>
					</div>
				</div>
			</div>
		)
	}
}

export default StepFive;