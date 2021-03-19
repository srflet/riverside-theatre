import Empirica from "meteor/empirica:core";
import { render } from "react-dom";

/*----------------------------
- Importing React components -
-----------------------------*/

//Consent
import Consent from "./consent/Consent";

// New Player form
import NewPlayer from "./new-player/NewPlayer";

//Introduction:
import GeneralIntroduction from "./intro/GeneralIntroduction";
import Initials from "./intro/Initials";
import Background from "./intro/Background";
import Quiz from "./intro/Quiz";

//Game:
import Round from "./game/Round";

//Exit
import PostSurvey from './exit/post-survey/PostSurvey';
import Thanks from "./exit/debrief/Thanks";
import Sorry from './exit/debrief/Sorry';

/*-----------------------------
- Setting up the Empirica app -
------------------------------*/

// Get rid of the header, it will be replaced by the dev wrapper than only shows on dev mode
Empirica.header(() => null);

// Set the Consent Component you want to present players (optional).
Empirica.consent(Consent);

// Set the component for getting the player id
Empirica.newPlayer(NewPlayer);

// Introduction pages to show before they play the game (optional).
// At this point they have been assigned a treatment. You can return
// different instruction steps depending on the assigned treatment.
Empirica.introSteps((game, treatment) => {
	const steps = [GeneralIntroduction];
	steps.push(Initials);
	steps.push(Background);
	steps.push(Quiz);
	return steps;
});

// The Round component containing the game UI logic.
Empirica.round(Round);

// Getting rid of the breadcrums (the progress bar):
Empirica.breadcrumb(() => null);

// End of Game pages.
// The last step will be the last page shown to user and will be shown to the
// user if they come back to the website.
// If you don't return anything, or do not define this function, a default
// exit screen will be shown.
// If there is a problem or the player exits because of issues such as game cancellation, show them a sorry page.
Empirica.exitSteps((game, player) => {
	if (
		!game ||
		(player.exitStatus &&
			player.exitStatus !== "finished" &&
			player.exitReason !== "playerQuit")
	) {
		return [Sorry];
	}
	return [PostSurvey, Thanks];
});

/*----------------
- Render the app -
-----------------*/

// Start the app render tree.
Meteor.startup(() => {
	render(Empirica.routes(), document.getElementById("app"));
});
