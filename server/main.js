// Importing Empirica
import Empirica from "meteor/empirica:core";
import "./bots.js";
import "./callbacks.js";
// Importing clues
import { clues_full } from "./clues/clues_full";
import { clues_blank } from "./clues/clues_blank.js";
// Importing avatar paths
import { avatarPaths } from './avatars/avatarPaths';
// Importing helper functions for randomness
import { choice, popChoice, shuffle } from './helper-functions/random';

/*-----------
- gameInit: -
-----------*/

// Setting a variable for whether this is development/testing or not
const isTest = true;

// Set starting clues for the different positions
const startingCluesA = [0, 1, 2];
const startingCluesB = [3, 4, 5];
const startingCluesC = [6, 7, 8];

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
		player.set("competition", game.treatment.competition)
		player.set("brokerage", game.treatment.brokerage)

		// Getting the avatar
		let shape = popChoice(avatarShapes);
		let color = popChoice(avatarColors);
		let avatar = avatarPaths[shape][color];
		player.set("avatar", avatar);

		// Randomise which player type they are:
		player.set("type", playerTypes[i]);

		// Giving individual clues to the players (No counterbalancing)
		if (player.get("type") === "A") {
			player.set("independent-clues", startingCluesA);
		} else if (player.get("type") === "B") {
			player.set("independent-clues", startingCluesB);
		} else {
			player.set("independent-clues", startingCluesC);
		}

		// Set whodunit order
		let whodunitOrder = ["Mr. Smith", "Mr. Smith's son", "Mrs. Davis", "Mr. Anderson"];
		whodunitOrder = shuffle(whodunitOrder);
		player.set("whodunit-order", whodunitOrder);

		// Set cluesCheck
		let cluesChecked = {};
		clues_full.clues.forEach(clue => {
			cluesChecked[clue.id] = "";
		});
		player.get("independent-clues").forEach(clue => {
			cluesChecked[clue] = "__HAS_CLUE__";
		});
		player.set("cluesChecked", cluesChecked);

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

	// Setting up the round.
	const round = game.addRound({
		data: {
			messages: [],
			clues_full: clues_full,
			clues_blank: clues_blank,
			startingCluesA: startingCluesA,
			startingCluesB: startingCluesB,
			startingCluesC: startingCluesC,
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
