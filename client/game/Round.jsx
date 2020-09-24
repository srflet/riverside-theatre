import React from "react";

//Importing UI
import PlayerProfile from "./general-ui/PlayerProfile.jsx";

//Importing Stages
import Initials from "./stages/Initials";
import IndependentInvestigation from "./stages/IndependentInvestigation";
import SummaryClues from "./stages/SummaryClues.jsx";
import IntroDiscussion from "./stages/IntroDiscussion.jsx";
import Incentives from "./stages/Incentives.jsx";
import PresComStruct from "./stages/PresComStruct.jsx";
import Discussion from "./stages/Discussion.jsx";

//Creating the round component
export default class Round extends React.Component {

	render() {
		const { round, stage, player, game } = this.props;

		return (
			<div className="round">
				<div className="content">
					<PlayerProfile player={player} stage={stage} game={game} />
					<div className="stages">
						<Initials player={player} stage={stage} />
						<IndependentInvestigation player={player} stage={stage} />
						<SummaryClues player={player} stage={stage} />
						<IntroDiscussion player={player} stage={stage} />
						<Incentives competitionCondition={game.treatment.competition} player={player} stage={stage} />
						<PresComStruct game={game} player={player} stage={stage} />
						<Discussion round={round} game={game} player={player} stage={stage} />
					</div>
				</div>
			</div>
		);
	}
}
