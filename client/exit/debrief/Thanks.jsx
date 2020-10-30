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
						The purpose of this research project is to investigate the idea that competition and network structure (who is allowed to talk to whom) together influences information flow between the three players.
          			</p>
					<p>
						<u>Please keep all information about the study confidential.</u> Specifically, it is important for our research that you do not disclose details of the task or discuss conditions. This is because others may be participating in this study and giving them prior knowledge will harm the integrity of our research.  If you have any final questions about this research or management generally, please contact the experimenter, listed below.
          			</p>
					<p>
						At the end of our study (approximately late November), we will examine the scoreboard for all the participants and we will email the winners. Top 25 will win $10 Amazon Gift Card, and Top 10 wins $20 Amazon Gift Card.
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
						Once you have read the debrief, you can close the window. To make sure you receive your credits, <strong><u>please send your UID in a Zoom private message to the experiment session leader</u></strong>.
					</div>
				</div>
			</div >
		);
	}
}
