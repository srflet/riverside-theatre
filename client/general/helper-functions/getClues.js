import { deepCopy } from './deepCopy';

export const getMyClues = (round, player) => {

    let playerClues = player.get("myClues")
    let clues = deepCopy(round.get("clues")).filter(clue => playerClues.includes(clue.id))

    return clues;
}

export const getPlayerClues = (round, game, type) => {

    let player = game.players.filter(player => player.get("type") === type)[0]
    let playerClues = player.get("myClues")
    let clues = deepCopy(round.get("clues")).filter(clue => playerClues.includes(clue.id))

    return clues;
}

export const getAllClues = (round) => {

    let clues = deepCopy(round.get("clues"))

    return clues;
}