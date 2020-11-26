import React from "react";

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
						Thank you for participating in this game today. Please return to your seminar Zoom meeting.
          			</p>
					<p>
						At the end of the term, we will examine the scoreboard for all the participants and we will email the winners. Top 25 will win £10 Amazon Gift Card, and Top 10 wins £20 Amazon Gift Card.
					</p>
					<p>
						Thank you for participating in this research today.  I hope this experience gives you some insight in how knowledge is developed through the research process. I also hope you learned from the experience. Your participation today helped us add to the productive research community at our university.
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
						Please return to your seminar Zoom meeting for a debrief.
					</div>
				</div>
			</div >
		);
	}
}
