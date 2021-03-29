import React from "react";

//Importing UI
import DevWrapper from "../general/dev-wrapper/DevWrapper";
import { Centered } from "meteor/empirica:core";
import Alert from '../general/alert/Alert'

//Importing Stages
import PersonalisedInstructions from "./personalised-instructions/PersonalisedInstructions";
import Discussion from "./discussion/Discussion";

//Creating the round component
export default class Round extends React.Component {

	render() {
		const { round, stage, player } = this.props;

		return (
			<DevWrapper {...this.props}>
				<Centered>
					{/* If in a stage the timer goes under 2min, it sets the round "alert" to true, which shows a custom alert */}
					{player.round.get("alert") && <Alert player={player} />}

					{/* Show the stage based on the stage name */}
					<div>
						{
							stage.name === "personalised_instructions"
								? <PersonalisedInstructions {...this.props} />
								: <Discussion {...this.props} />
						}
					</div>
				</Centered>
			</DevWrapper>
		);
	}
}
