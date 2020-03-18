// ContactPage.jsx
import React, {Component} from 'react';
import {Button} from "semantic-ui-react";

class ContactPage extends Component {

	next = (e) => {
		e.preventDefault()
		this.props.next()
	}

	render() {
		return (
			<div className="col-sm-12 col-md-10 offset-md-1">
				<h1 className="text-center mt-5 mb-4">Emergency Hotlines, Hospitals, and LGUs</h1>
				<br/>
				<p className="mb-5">Please refer to the list below for the nearest hospitals and LGUs if you need help. We are
					continuing to update the list as we go, if you are a local hospital or clinic etc etc, you may reach
					out to us at <a href="https://t.me/joinchat/EBf1xxafyu8E3Io4BlbjQg" role="link" target="_blank">Telegram</a>
				</p>
				
				<div className="row">
					<div className="contact-group col-sm-12 col-md-12 my-4">
						<h3 className="group-category mb-4">National Helplines</h3>
						{/* Start of Row */}
						<div className="row">
							<div className="contact-details my-3 col-sm-12 col-md-6">
								<p className="contact-name mb-2">
									<strong>Department of Health: COVID-19 Hotline</strong>
								</p>
								<p className="contact-numbers">
									(02) 894-26843
								</p>
								<p className="mb-0">For PLDT, Smart, Sun, and TNT Subscribers:</p>
								<p className="contact-numbers">
									1555
								</p>
							</div>
							<div className="contact-details my-3 col-sm-12 col-md-6">
								<p className="contact-name mb-2">
									<strong>Department of Health - Philippines</strong>
								</p>
								<p className="contact-numbers">
									(02) 8-651-7800 Loc 1149-1150
								</p>
							</div>
						</div>
						{/* End of Row */}
					</div>

					<div className="contact-group col-sm-12 col-md-12 my-4">
						<h3 className="group-category mb-4">Visayas</h3>
						{/* Start of Row */}
						<div className="row">
							<div className="contact-details my-3 col-sm-12 col-md-6">
								<p className="contact-name mb-2">
									<strong>Cebu City</strong>
								</p>
								<p className="contact-numbers">
									0922 397 2334
									<br/>
									0943 568 3298
									<br/>
									(032) 402 3091
									<br/>
									(032) 402 1269
								</p>
							</div>
							<div className="contact-details my-3 col-sm-12 col-md-6">
								<p className="contact-name mb-2">
									<strong>Western Visayas</strong>
								</p>
								<p className="contact-numbers">
									(033) 332 2575 Loc 149
									<br/>
									(033) 332 2329 Loc 149
								</p>
							</div>
							<div className="contact-details my-3 col-sm-12 col-md-6">
								<p className="contact-name mb-2">
									<strong>Eastern Visayas</strong>
								</p>
								<p className="contact-numbers">
									0916 655 7187
									<br/>
									(053) 888 3416
								</p>
							</div>
						</div>
						{/* End of Row */}
					</div>

					<div className="contact-group col-sm-12 col-md-12 my-4">
						<h3 className="group-category mb-4">Mindanao</h3>
						{/* Start of Row */}
						<div className="row">
							<div className="contact-details my-3 col-sm-12 col-md-6">
								<p className="contact-name mb-2">
									<strong>Bukidnon</strong>
								</p>
								<p className="contact-numbers">
									0926 927 9806
								</p>
							</div>
							<div className="contact-details my-3 col-sm-12 col-md-6">
								<p className="contact-name mb-2">
									<strong>Cagayan de Oro</strong>
								</p>
								<p className="contact-numbers">
									0975 841 3299
								</p>
							</div>
							<div className="contact-details my-3 col-sm-12 col-md-6">
								<p className="contact-name mb-2">
									<strong>Lanao del Sur</strong>
								</p>
								<p className="contact-numbers">
									0926 927 9811
								</p>
							</div>
							<div className="contact-details my-3 col-sm-12 col-md-6">
								<p className="contact-name mb-2">
									<strong>Misamis Occidental</strong>
								</p>
								<p className="contact-numbers">
									0926 927 9913
								</p>
							</div>
							<div className="contact-details my-3 col-sm-12 col-md-6">
								<p className="contact-name mb-2">
									<strong>Misamis Oriental</strong>
								</p>
								<p className="contact-numbers">
									0926 641 0230
								</p>
							</div>
							<div className="contact-details my-3 col-sm-12 col-md-6">
								<p className="contact-name mb-2">
									<strong>Davao City</strong>
								</p>
								<p className="contact-numbers">
									0919 071 1111
									<br/>
									0917 509 5386
									<br/>
									0917 508 6548
									<br/>
									(082) 326 5386
								</p>
							</div>
						</div>
						{/* End of Row */}
					</div>
				</div>

				<p>We're still updating this page.</p>
			</div>
		)
	}
}

export default ContactPage;