import React from "react";

//Importing UI
import Footer from "./general-ui/footer/Footer.jsx";

//Importing Stages
import Initials from "./initials/Initials";
import Discussion from "./discussion/Discussion.jsx";
import FinalQuizQuestions from "../surveys/FinalQuizQuestions.jsx";
import FinalQuizAnswers from "../surveys/FinalQuizAnswers.jsx";
import PersonalisedInstructions from "./personalised-instructions/PersonalisedInstructions.jsx";

//Creating the round component
export default class Round extends React.Component {

	render() {
		const { round, stage, player, game } = this.props;

		return (
			<div className="round">
				<div className="content">

					<div className="stages">
						<Initials player={player} stage={stage} game={game} />
						<PersonalisedInstructions round={round} player={player} stage={stage} game={game} />
						<Discussion round={round} game={game} player={player} stage={stage} />
						<FinalQuizQuestions game={game} player={player} stage={stage} />
						<FinalQuizAnswers game={game} player={player} stage={stage} />
					</div>

					<div className="footer">
						<Footer game={game} player={player} stage={stage} />
					</div>
				</div>
			</div>
		);
	}
}
