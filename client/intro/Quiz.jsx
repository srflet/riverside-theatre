import React from "react";

import { Centered } from "meteor/empirica:core";
import DevWrapper from "../general/dev-wrapper/DevWrapper";

export default class Quiz extends React.Component {
	state = { answer: "" };

	handleChange = e => {
		const radio = e.currentTarget;
		this.setState({ answer: radio.value });
	};

	handleSubmit = event => {
		event.preventDefault();

		const { player } = this.props
		const { answer } = this.state

		if (answer === "") {
			alert("Please select an answer!")
		} else if (answer !== "right") {

			alert("Incorrect: The correct answer is that you will have clues from the police investigation that are available to all three players AND clues from your own independent investigation that are unique to yourself. Please answer again.");

			let understanding1 = player.get("understanding1") ?? 0;
			player.set("understanding1", understanding1 + 1);

		} else {
			let understanding1 = player.get("understanding1") ?? 0;
			player.set("understanding1", understanding1);

			this.props.onNext();
		}
	};

	render() {
		const { hasPrev, onPrev } = this.props;
		const { answer } = this.state;

		return (
			<DevWrapper {...this.props}>
				<Centered>
					<div className="quiz">
						<h2> Just to check your understanding... </h2>
						<p>What type of clues will be available to you?</p>

						<form onSubmit={this.handleSubmit}>

							<div className="radio-list">
								<input
									type="radio"
									name="comprehensionCheck1"
									value="wrong1"
									onChange={this.handleChange}
									checked={answer === "wrong1"}
								/>
								<span>Clues from the police investigation that are available to all three players</span>
								<br />
							</div>

							<div className="radio-list">
								<input
									type="radio"
									name="comprehensionCheck1"
									value="wrong2"
									onChange={this.handleChange}
									checked={answer === "wrong2"}
								/>
								<span>Clues from your own independent investigations that are unique to yourself</span>
								<br />
							</div>

							<div className="radio-list">
								<input
									type="radio"
									name="comprehensionCheck1"
									value="right"
									onChange={this.handleChange}
									checked={answer === "right"}
								/>
								<span>Both</span>
								<br />
							</div>

							<p className="button-holder">
								<button type="button" onClick={onPrev} disabled={!hasPrev}>
									Back to instructions
             				 	</button>
							  	&emsp;
								<button type="submit">Submit and be connected to the other two players</button>
							</p>

						</form>
					</div>
				</Centered>
			</DevWrapper>
		);
	}
}
