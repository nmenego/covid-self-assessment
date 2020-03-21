import React, {Component} from 'react';
import {Button} from "semantic-ui-react";

class FAQPage extends Component {

	next = (e) => {
		e.preventDefault()
		this.props.next()
	}

	render() {
		return (
			<div className="col-sm-12 col-md-10 offset-md-1">
				<h1 className="text-center mt-5 mb-4">Frequently Asked Questions</h1>
				<br/>
				<p>
					This page will constantly be updated as we get more information from Health Authorities, and Government Departments. If you have questions or are experiencing symptons,
					please contact your local health authority as soon as possible. We made a <a href="/contact" role="link">list</a> of emergency hotlines, local hospitals and LGUs.
				</p>
				<p>	
					If you’re unsure about your symptons, you can use our <a href="/">Self-Assessment app</a> and take precautionary actions.
				</p>

				{/* <div className="row">
					<div className="col-sm-12 col-md-12 my-5">
						<div className="panel-group" id="faq-accordion" role="tablist" aria-multiselectable="true">
							<div className="panel panel-default card-light-blue">
								<div className="panel-heading" role="tab" id="question-1">
									<h4 className="panel-title p-3">
										<a className="faq-question" role="button" data-toggle="collapse" data-parent="#faq-accordion" href="#answer-1" aria-expanded="true" aria-controls="answer-1">
										How do I tell if I had “Close Contact”?
										</a>
									</h4>
								</div>
								<div id="answer-1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="question-1">
									<div className="panel-body">
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}

				<div className="row">
					<div className="col-sm-12 col-md-12 my-5">
						{/* Start of FAQ */}
						<div className="panel panel-default card-light-blue p-4 mb-5">
							<div className="panel-heading" role="tab" id="question-1">
								<p className="panel-title faq-question">
									How do I tell if I had “Close Contact”?
								</p>
							</div>
							<div className="panel-body pt-2">
								<p>
									You had <strong>close contact</strong> if you were:
								</p>
								<ul className="question-ul" role="list">
									<li>Providing direct care for COVID-19 patient</li>
									<li>Working together or staying in the same close environment of a COVID-19</li>
									<li>Traveling together with COVID-19 patient in any kind of conveyance</li>
									<li>Living in the same household as a COVID-19 patient</li>
									<li>Having close interaction (1 meter) with a COVID-19 patient from 4 days before having fever, cough and other symptoms until they had experienced the said symptoms.</li>
								</ul>
							</div>
						</div>
						{/* End of FAQ */}

						{/* Start of FAQ */}
						<div className="panel panel-default card-light-blue p-4 mb-5">
							<div className="panel-heading" role="tab" id="question-1">
								<p className="panel-title faq-question">
									How much does COVID-19 testing cost?
								</p>
							</div>
							<div className="panel-body pt-2">
								<p>
									In RITM (Research Institute for Tropical Medicine), a test costs PHP 5,000 to PHP 8,000.
								</p>
								<p>
									Meanwhile, a test that’s being done by UP may cost PHP 1,200 up to PHP 1,500, though this does not include the so-called extraction step which may cost another PHP 1,500 up to PHP 2,000. All in all, expect a test done by UP to cost from PHP 2,700 up to PHP 3,500.
								</p>
							</div>
						</div>
						{/* End of FAQ */}

						{/* Start of FAQ */}
						<div className="panel panel-default card-light-blue p-4 mb-5">
							<div className="panel-heading" role="tab" id="question-1">
								<p className="panel-title faq-question">
									Why can’t the testing be done in all hospitals?
								</p>
							</div>
							<div className="panel-body pt-2">
								<p>
									Included in the equipment and facilities needed to properly use the kit are as follows:
								</p>
								<ul className="question-ul" role="list">
									<li>Real-Time PCR Machine</li>
									<li>Biosafety Level 2 (BSL 2) Cabinets to ensure the samples from the patient are correct</li>
								</ul>
								<p>
									These will cost more than PHP 1,000,000 and must be handled by knowledgeable medical technologists that have additional training so the tests conducted are done safely.
								</p>
							</div>
						</div>
						{/* End of FAQ */}

						{/* Start of FAQ */}
						<div className="panel panel-default card-light-blue p-4 mb-5">
							<div className="panel-heading" role="tab" id="question-1">
								<p className="panel-title faq-question">
									How is COVID-19 testing done?
								</p>
							</div>
							<div className="panel-body pt-2">
								<p>
									A specimen is obtained by rubbing a sterile cotton swab inside the nose and throat.
								</p>
								<p>
									A sample from the patient is placed inside a transport medium to avoid damage while it’s being brought to the laboratory where the test will be conducted.
								</p>
							</div>
						</div>
						{/* End of FAQ */}

						{/* Start of FAQ */}
						<div className="panel panel-default card-light-blue p-4 mb-5">
							<div className="panel-heading" role="tab" id="question-1">
								<p className="panel-title faq-question">
									How does one know if a patient has COVID-19?
								</p>
							</div>
							<div className="panel-body pt-2">
								<p>
									The patient should exhibit the following:
								</p>
								<ul className="question-ul" role="list">
									<li>
										Has symptoms related to COVID-19 including:
										<ul className="question-ul" role="list">
											<li>Fever</li>
											<li>Cough</li>
											<li>Colds</li>
											<li>Difficulty breathing</li>
										</ul>
									</li>
									<li>
										Positive after completing COVID-19 testing which is done only in labs that have the capability in doing such tests
									</li>
								</ul>
							</div>
						</div>
						{/* End of FAQ */}

					</div>
				 </div>
			</div>
		)
	}
}

export default FAQPage;