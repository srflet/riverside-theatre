import Empirica from "meteor/empirica:core";
import { render } from "react-dom";

/*-----------------------------
- Importing React components: -
------------------------------*/

//Introduction:
import Consent from "./intro/Consent";
import GeneralIntroduction from "./intro/GeneralIntroduction";
import PoliceInformation from "./intro/PoliceInformation";
import Quiz from "./intro/Quiz";

//Breadcrumb (progress bar):
import Breadcrumb from "./game/general-ui/BreadCrumb"

//Game:
import Round from "./game/Round";

//Exit
import ExitSurvey from "./exit/ExitSurvey";
import Thanks from "./exit/Thanks";

// Set the Consent Component you want to present players (optional).
Empirica.consent(Consent);

// Introduction pages to show before they play the game (optional).
// At this point they have been assigned a treatment. You can return
// different instruction steps depending on the assigned treatment.
Empirica.introSteps((game, treatment) => {
	const steps = [GeneralIntroduction];
	steps.push(PoliceInformation);
	steps.push(Quiz);
	return steps;
});

// The Round component containing the game UI logic.
Empirica.round(Round);

//Getting rid of the breadcrums (the progress bar):
Empirica.breadcrumb(Breadcrumb);

// End of Game pages.
// The last step will be the last page shown to user and will be shown to the
// user if they come back to the website.
// If you don't return anything, or do not define this function, a default
// exit screen will be shown.
Empirica.exitSteps((game, player) => {
	return [ExitSurvey, Thanks];
});

// Start the app render tree.
Meteor.startup(() => {
	render(Empirica.routes(), document.getElementById("app"));
});
