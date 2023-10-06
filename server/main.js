// Importing Empirica
import Empirica from "meteor/empirica:core";
import "./bots.js";
import "./callbacks.js";
// Importing clues
// Importing avatar paths
import { avatarPaths } from './avatars/avatarPaths';
// Importing helper functions for randomness
import { choice, popChoice, shuffle } from './helper-functions/random';
import { clues } from "./clues/clues.js";

/*-----------
- gameInit: -
-----------*/

// Setting a variable for whether this is development/testing or not (determines the time set to the stages)
const isTest = false;

const cluesRed = [0, 1, 2, 3];
const cluesBlue = [4, 5, 6, 7];
const cluesGreen = [8, 9, 10, 11];

// Running the gameInit
Empirica.gameInit(game => {

	/*-------------------------
	- Setting up the players: -
	-------------------------*/

	// Prepare the player types
	let playerTeams = ["Red", "Blue", "Green"];
	let playerRoles = ["Liason", "Member"];
	let playerTypes = playerTeams.flatMap(team => playerRoles.map(role => team + "_" + role));


	// Shuffle the player types
	// playerTypes = shuffle(playerTypes);

	// Prepare elements for players to randomly draw an avatar:
	const avatarShapes = ["first", "second", "third"];
	const avatarColors = ["red", "blue", "green"];

	// Setting up the players
	game.players.forEach((player, i) => {

		// Getting condition information (makes it easier for data wrangling)
		const competition = JSON.parse(game.treatment.competition)
		const communication = JSON.parse(game.treatment.communication)
		player.set("competition", competition)
		player.set("communication", communication)

		// Getting the avatar

		// Randomise which player type, team and role they are:
		player.set("type", playerTypes[i]);
		player.set("team", playerTypes[i].split("_")[0])
		player.set("role", playerTypes[i].split("_")[1])
		let team = player.get("team");

		let avatarIdx = NaN
		// Giving individual clues to the players (No counterbalancing)
		if (team === "Red") {
			avatarIdx = 0;
			player.set("myClues", cluesRed);
		} else if (team === "Blue") {
			avatarIdx = 1;
			player.set("myClues", cluesBlue);
		} else {
			avatarIdx = 2;
			player.set("myClues", cluesGreen);
		}

		// Getting the avatar
		let shape = avatarShapes[avatarIdx];
		let color = avatarColors[avatarIdx];
		let avatar = avatarPaths[shape][color];
		player.set("avatar", avatar);

		let cluesAnswered = {}
		player.get("myClues").forEach(clueId => cluesAnswered[clueId] = clues[clueId].response)
		player.set("clues-answered", cluesAnswered)

		// Set chat messages
		player.set("chatRB", []);
		player.set("chatRG", []);
		player.set("chatBG", []);

		// Set team chat messages
		player.set("chatRed", []);
		player.set("chatBlue", []);
		player.set("chatGreen", []);

		// Set early submission:
		player.set("isEarlySubmission", false);
		player.set("earlySubmissionTime", 0);

		// Add navigation pages:
		player.set("personalisedDiscussionPage", 1);
		player.set("exitPage", 1);

		// Set alert type 
		player.set("alertType", "2 mins")
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
			earlySubTimeNum: 900,
		}
	});

	round.addStage({
		name: "personalised_instructions",
		displayName:"Instructions",
		durationInSeconds: isTest ? 999999999999 : 900,
	});

	round.addStage({
		name: "team_connect",
		displayName: "Teammate Connect",
		durationInSeconds: isTest ? 90: 180,
	})

	round.addStage({
		name: "discussion",
		displayName: "Discussion",
		durationInSeconds: isTest ? 501 : 840,
	});

	round.addStage({
		name: "collaborate",
		displayName: "Collaborate",
		durationInSeconds: isTest ? 135 : 840,
	});
});
