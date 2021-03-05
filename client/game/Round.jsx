import React from "react";

//Importing UI
import { Centered } from "meteor/empirica:core";

//Importing Stages
import PersonalisedInstructions from "./personalised-instructions/PersonalisedInstructions";
import Discussion from "./discussion/Discussion";
import DevWrapper from "../general/dev-wrapper/DevWrapper";

//Creating the round component
export default class Round extends React.Component {

	render() {
		const { stage } = this.props;

		return (
			<DevWrapper {...this.props}>
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
			</DevWrapper>
		);
	}
}
