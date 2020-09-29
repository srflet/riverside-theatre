import Empirica from "meteor/empirica:core";
import { Meteor } from 'meteor/meteor';
import "./bots.js";
import "./callbacks.js";

//Some tests with Meteor's ability to related to collections
import { TestCollection } from './db/Test';

Meteor.startup(() => {
	TestCollection.insert({ text: "hello" });
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

//shuffle(): Fisher-Yates shuffle from https://www.frankmitchell.org/2015/01/fisher-yates/
function shuffle(array) {
	var i = 0, j = 0, temp = null;
	//Start with i one less than the array size, and decrement i everytime
	for (i = array.length - 1; i > 0; i -= 1) {
		//Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)
		//Math.floor() function returns the largest integer less than or equal to a given number.
		//This will return an integer that is a possible index of the array
		j = Math.floor(Math.random() * (i + 1));
		//Swap the last element of the array (index i) with the element at index j (randomly generated:
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	//return the shuffled array
	return array;
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
	let playerTypes = ["A", "B", "C"];

	//Shuffle the player types
	playerTypes = shuffle(playerTypes);

	//Setting up the players
	game.players.forEach((player, i) => {
		player.set("avatar", `/avatars/jdenticon/${player._id}`);

		//Prepare their initials
		player.set("initials", `NoInitials(${i})`);

		//Randomise which player type they are:
		player.set("type", playerTypes[i]);

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
