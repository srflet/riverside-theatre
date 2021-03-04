import { deepCopy } from './deepCopy';

export const getClues = (game, round, player, position) => {

    let otherPlayers = game.players.filter(otherPlayer => {
        return otherPlayer.get("type") !== player.get("type")
    });
    let playerClues = player.get("independent-clues");
    let clues_full = deepCopy(round.get("clues_full").clues);
    let clues_blank = deepCopy(round.get("clues_blank").clues);
    let clueIds;
    if (position === "all") {
        clueIds = clues_full.map((clue, index) => index);
    } else {
        clueIds = round.get("startingClues" + position);
    }

    let clues = [];

    clues_full.forEach((clue, index) => {
        let currentClue;
        //If this is one of the clues we are looking for...
        if (clueIds.includes(index)) {

            //If this current player has this clue...
            if (playerClues.includes(index)) {
                //Get the full clue
                currentClue = clue;

                // //See if any of the other players has it
                // let otherPlayersHaveIt = false;
                // otherPlayers.forEach(otherPlayer => {
                //     if (otherPlayer.get("independent-clues").includes(index)) {
                //         otherPlayersHaveIt = true;
                //     }
                // });
                // //Add text to the clue:
                // if (otherPlayersHaveIt && player.get("type") === position) {
                //     currentClue.text = currentClue.text + " (this clue is shared by another participant)";
                // }
            } else {
                //...or if this current player does not have this clue
                //get the blank clue
                currentClue = clues_blank[index];
            }

            clues.push(currentClue);
        }
    });

    return clues;
}