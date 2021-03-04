import React from "react";

//Importing UI
import { Centered } from "meteor/empirica:core";

//Importing Stages
import PersonalisedInstructions from "./personalised-instructions/PersonalisedInstructions";
import Discussion from "./discussion/Discussion";

//Creating the round component
export default class Round extends React.Component {

	render() {
		const { round, stage, player, game } = this.props;

		return (
			<Centered>
				<div className="round">
					<div className="content">
						<div className="stages">
							<PersonalisedInstructions round={round} player={player} stage={stage} game={game} />
							<Discussion round={round} game={game} player={player} stage={stage} />
						</div>

					</div>
				</div>
			</Centered>
		);
	}
}
