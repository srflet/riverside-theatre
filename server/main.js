import Empirica from "meteor/empirica:core";
import { Meteor } from 'meteor/meteor';
import "./bots.js";
import "./callbacks.js";

//Some tests with Meteor's ability to related to collections
import { TestCollection } from './db/Test';

Meteor.startup(() => {
	TestCollection.insert({ text: "hello" });

	console.log(TestCollection.find().fetch());
	console.log(process.env);
});

/*-------------------
- Helper functions: -
-------------------*/

//Function to randomly choose an element from an array:
function choice(array) {
	var randomIndex = Math.floor(Math.random() * array.length);
	var randomElement = array[randomIndex];
	return randomElement;
}


//Function to randomly choose an element from an array (but also removes it):
function popChoice(array) {
	var randomIndex = Math.floor(Math.random() * array.length);
	return array.splice(randomIndex, 1)[0];
}

/*--------
- Clues: -
--------*/

//Importing the clues
import { clues1 } from "./stimuli/clues/clues1";
import { clues2 } from "./stimuli/clues/clues2";
import { clues3 } from "./stimuli/clues/clues3";

//Preparing the different possible distributions of clues
const clueConterbalancingPossibilities = [
	{ A: clues1, B: clues2, C: clues3 },
	{ A: clues1, B: clues3, C: clues2 },
	{ A: clues2, B: clues1, C: clues3 },
	{ A: clues2, B: clues3, C: clues1 },
	{ A: clues3, B: clues1, C: clues2 },
	{ A: clues3, B: clues2, C: clues1 }
];

/*-----------
- gameInit: -
-----------*/

Empirica.gameInit(game => {

	TestCollection.insert({ text: "hello" });

	/*-------------------------
	- Setting up the players: -
	-------------------------*/

	//Randomly selecting the counterbalanced distribution for this game
	const counterbalancedClues = choice(clueConterbalancingPossibilities);

	//Prepare the player types
	const playerTypes = ["A", "B", "C"];

	//Setting up the players
	game.players.forEach((player, i) => {
		player.set("avatar", `/avatars/jdenticon/${player._id}`);

		//Prepare their initials
		player.set("initials", `NoInitials(${i})`);

		//Randomise which player type they are:
		player.set("type", popChoice(playerTypes));

		//Giving individual clues to the players (NEED TO RANDOMISE!)
		if (player.get("type") === "A") {
			player.set("independent-clues", counterbalancedClues.A.clues);
		} else if (player.get("type") === "B") {
			player.set("independent-clues", counterbalancedClues.B.clues);
		} else {
			player.set("independent-clues", counterbalancedClues.C.clues);
		}

	});

	/*----------------------------------
	- Setting up the round and stages: -
	----------------------------------*/

	//Setting up the round.
	//Giving it the policeClues
	const round = game.addRound({
		data: {
			messages: []
		}
	});

	round.addStage({
		name: "initials",
		displayName: "Initials",
		durationInSeconds: 999999999999
	});

	round.addStage({
		name: "independent_investigation",
		displayName: "Independent Investigation",
		durationInSeconds: 999999999999
	});

	round.addStage({
		name: "summary_clues",
		displayName: "Summary of Clues",
		durationInSeconds: 999999999999
	});

	round.addStage({
		name: "intro_discussion",
		displayName: "Introducing Discussion",
		durationInSeconds: 999999999999
	});

	round.addStage({
		name: "incentives",
		displayName: "Incentives",
		durationInSeconds: 999999999999
	});

	round.addStage({
		name: "pres_com_struct",
		displayName: "Presenting Communication Structure",
		durationInSeconds: 999999999999
	});

	round.addStage({
		name: "discussion",
		displayName: "Discussion",
		durationInSeconds: 999999999999
	});

});
