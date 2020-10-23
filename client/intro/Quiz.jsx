import React from "react";

import { Centered } from "meteor/empirica:core";

export default class Quiz extends React.Component {
	state = { sum: "", horse: "" };

	handleChange = event => {
		const el = event.currentTarget;
		this.setState({ [el.name]: el.value.trim().toLowerCase() });
	};

	handleSubmit = event => {
		event.preventDefault();

		if (this.state.sum !== "4" || this.state.horse !== "white") {
			alert("Incorrect: You need to answer the quiz correctly before you can continue. Please try again.");
		} else {
			this.props.onNext();
		}
	};

	render() {
		const { hasPrev, hasNext, onNext, onPrev } = this.props;
		const { sum, horse } = this.state;
		return (
			<Centered>
				<div className="quiz">
					<h2> Quiz </h2>
					<p>
						Please carefully answer the following comprehension questions. You need to answer each question correctly before you can continue on to the next phase of the study. You can navigate back to reread the instructions if you need.
         			 </p>
					<form onSubmit={this.handleSubmit}>
						<p>
							<label htmlFor="sum">What is 2+2?</label>
							<input
								type="text"
								dir="auto"
								id="sum"
								name="sum"
								placeholder="e.g. 3"
								value={sum}
								onChange={this.handleChange}
								autoComplete="off"
								required
							/>
						</p>
						<p>
							<label htmlFor="horse">
								What color was Napoleon's white horse?
             				 </label>
							<input
								type="text"
								dir="auto"
								id="horse"
								name="horse"
								placeholder="e.g. brown"
								value={horse}
								onChange={this.handleChange}
								autoComplete="off"
								required
							/>
						</p>

						<p className="button-holder">
							<button type="button" onClick={onPrev} disabled={!hasPrev}>
								Back to instructions
             				 </button>
							<button type="submit">Submit</button>
						</p>
					</form>
				</div>
			</Centered>
		);
	}
}
