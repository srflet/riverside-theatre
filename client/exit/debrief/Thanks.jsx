import React from "react";

// The debriefing page

export default class Thanks extends React.Component {
	static stepName = "Thanks";
	render() {
		return (
			<div className="centered">
				<div>
					<h2>Debriefing Form</h2>
					<p>Thank you for participating in our research today!</p>

					<br />
					<div className="game-clues" style={{ textAlign: "center" }}>
						<strong>The guilty person was Mr. Smith's son.</strong>
					</div>
					<br />
					<p>
						When we finish collecting data for the study, we will examine the scoreboard for all the participants and we will email the winners. Top 25 will win $10 Amazon Gift Card, and Top 10 wins $20 Amazon Gift Card.
					</p>
					<p>
						Best of luck to you.
          			</p>
					<p>
						Taiyi Yan
          			</p>
					<p>
						tomyan@umd.edu
          			</p>
				</div>

				<br />
				<div className="game-instructions">
					<div>
						Please return to your Zoom session.
					</div>
				</div>
			</div >
		);
	}
}
