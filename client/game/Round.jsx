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
							{
								stage.name === "personalised_instructions"
									? <PersonalisedInstructions {...this.props} />
									: <Discussion {...this.props} />
							}
						</div>

					</div>
				</div>
			</Centered>
		);
	}
}
