import React from "react";

//Importing UI
import Footer from "./general-ui/footer/Footer.jsx";

//Importing Stages
import Initials from "./stages/Initials";
import IndependentInvestigation from "./stages/IndependentInvestigation";
import SummaryClues from "./stages/SummaryClues.jsx";
import IntroDiscussion from "./stages/IntroDiscussion.jsx";
import Incentives from "./stages/Incentives.jsx";
import PresComStruct from "./stages/PresComStruct.jsx";
import Discussion from "./stages/Discussion.jsx";
import FinalQuizQuestion from "./stages/FinalQuizQuestion.jsx";
import FinalQuizAnswer from "./stages/FinalQuizAnswer.jsx";

//Creating the round component
export default class Round extends React.Component {

	render() {
		const { round, stage, player, game } = this.props;

		return (
			<div className="round">
				<div className="content">

					<div className="stages">
						<Initials player={player} stage={stage} game={game} />
						<IndependentInvestigation player={player} stage={stage} game={game} />
						<SummaryClues player={player} stage={stage} game={game} />
						<IntroDiscussion player={player} stage={stage} game={game} />
						<Incentives competitionCondition={game.treatment.competition} player={player} stage={stage} game={game} />
						<PresComStruct game={game} player={player} stage={stage} />
						<Discussion round={round} game={game} player={player} stage={stage} />
						<FinalQuizQuestion game={game} player={player} stage={stage} />
						<FinalQuizAnswer game={game} player={player} stage={stage} />
					</div>

					<div className="footer">
						<Footer game={game} player={player} stage={stage} />
					</div>
				</div>
			</div>
		);
	}
}
