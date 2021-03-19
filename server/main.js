// Importing Empirica
import Empirica from "meteor/empirica:core";
import "./bots.js";
import "./callbacks.js";
// Importing clues
import { clues } from './clues/clues';
// Importing avatar paths
import { avatarPaths } from './avatars/avatarPaths';
// Importing helper functions for randomness
import { choice, popChoice, shuffle } from './helper-functions/random';

/*-----------
- gameInit: -
-----------*/

// Setting a variable for whether this is development/testing or not (determines the time set to the stages)
const isTest = true;

// Set starting clues for the different positions
const cluesA = [0, 1, 2];
const cluesB = [3, 4, 5];
const cluesC = [6, 7, 8];

// Running the gameInit
Empirica.gameInit(game => {

	/*-------------------------
	- Setting up the players: -
	-------------------------*/

	// Prepare the player types
	let playerTypes = ["A", "B", "C"];

	// Shuffle the player types
	playerTypes = shuffle(playerTypes);

	// Prepare elements for players to randomly draw an avatar:
	const avatarShapes = ["first", "second", "third"];
	const avatarColors = ["color1", "color2", "color3"];

	// Setting up the players
	game.players.forEach((player, i) => {

		// Getting condition information (makes it easier for data wrangling)
		const competition = JSON.parse(game.treatment.competition)
		const communication = JSON.parse(game.treatment.communication)
		player.set("competition", competition)
		player.set("communication", communication)

		// Getting the avatar
		let shape = popChoice(avatarShapes);
		let color = popChoice(avatarColors);
		let avatar = avatarPaths[shape][color];
		player.set("avatar", avatar);

		// Randomise which player type they are:
		player.set("type", playerTypes[i]);
		let type = player.get("type");

		// Giving individual clues to the players (No counterbalancing)
		if (type === "A") {
			player.set("myClues", cluesA);
		} else if (type === "B") {
			player.set("myClues", cluesB);
		} else {
			player.set("myClues", cluesC);
		}

		// Prepare the clues the the player has answered
		// Get the official fill of each clue that this player already know based on their type (A, B, C)
		let cluesAnswered = {}
		player.get("myClues").forEach(clueId => cluesAnswered[clueId] = clues[clueId].response)
		player.set("clues-answered", cluesAnswered)

		// Set whodunit order (randomise order of the whodunit question)
		let whodunitOrder = [
			{ text: "Mr. Smith", name: "Smith" },
			{ text: "Mr. Smith's son", name: "son" },
			{ text: "Mrs. Davis", name: "Davis" },
			{ text: "Mr. Anderson", name: "Anderson" }
		];
		whodunitOrder = shuffle(whodunitOrder);
		player.set("whodunit-order", whodunitOrder);

		// Set chat messages
		player.set("chatAB", []);
		player.set("chatAC", []);
		player.set("chatBC", []);

		// Set early submission:
		player.set("isEarlySubmission", false);
		player.set("earlySubmissionTime", 0);

		// Add navigation pages:
		player.set("personalisedDiscussionPage", 1);
		player.set("exitPage", 1);
	});

	/*----------------------------------
	- Setting up the round and stages: -
	----------------------------------*/

	// Setting up the round
	// Set the clues, but also the timing for the discussion and early submission (text, and when players can start early submitting)
	const round = game.addRound({
		data: {
			messages: [],
			clues: clues,
			discussionTime: "12",
			earlySubTimeText: "5",
			earlySubTimeNum: 300,
		}
	});

	round.addStage({
		name: "personalised_instructions",
		displayName: "Instructions",
		durationInSeconds: isTest ? 999999999999 : 900,
	});

	round.addStage({
		name: "discussion",
		displayName: "Discussion",
		durationInSeconds: isTest ? 999999999999 : 720,
	});
});
