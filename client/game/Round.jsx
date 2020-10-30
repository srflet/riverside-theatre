import React from "react";

//Importing UI
import Footer from "./general-ui/footer/Footer.jsx";
import { Centered } from "meteor/empirica:core";

//Importing Stages
import PersonalisedInstructions from "./personalised-instructions/PersonalisedInstructions.jsx";
import Discussion from "./discussion/Discussion.jsx";

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
