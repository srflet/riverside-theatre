import { deepCopy } from './deepCopy';

export const getPlayerClues = (round, player) => {

    let playerClues = player.get("myClues")
    let clues = deepCopy(round.get("clues")).filter(clue => playerClues.includes(clue.id))

    return clues;
}

export const getAllClues = (round, player) => {

    let clues = deepCopy(round.get("clues"))

    return clues;
}