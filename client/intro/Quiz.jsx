import React from "react";

import { Centered } from "meteor/empirica:core";

export default class Quiz extends React.Component {
	state = { answer: "" };

	handleChange = e => {
		const radio = e.currentTarget;
		this.setState({ answer: radio.value });
	};

	handleSubmit = event => {
		event.preventDefault();

		if (this.state.answer !== "right") {
			alert("Incorrect: You need to answer the quiz correctly before you can continue. Please try again.");
		} else {
			this.props.onNext();
		}
	};

	render() {
		const { hasPrev, hasNext, onNext, onPrev } = this.props;
		const { answer } = this.state;

		return (
			<Centered>
				<div className="quiz">
					<h2> Comprehension Quiz </h2>
					<p>
						Please carefully answer the following comprehension question. You need to answer the question correctly before you can continue on to the next phase of the study. You can navigate back to reread the instructions if you need.
         			</p>
					<p>
						What type of clues will be available to you?
					</p>
					<form onSubmit={this.handleSubmit}>
						<input
							type="radio"
							name="comprehensionCheck1"
							value="wrong1"
							onChange={this.handleChange}
							checked={answer === "wrong1"}
							required
						/>
						<span>Clues from the police investigation that are shared by all three players</span>
						<br />

						<input
							type="radio"
							name="comprehensionCheck1"
							value="wrong2"
							onChange={this.handleChange}
							checked={answer === "wrong2"}
							required
						/>
						<span>Clues from your own independent investigations that are largely unique to yourself</span>
						<br />

						<input
							type="radio"
							name="comprehensionCheck1"
							value="right"
							onChange={this.handleChange}
							checked={answer === "right"}
							required
						/>
						<span>Both</span>
						<br />

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
