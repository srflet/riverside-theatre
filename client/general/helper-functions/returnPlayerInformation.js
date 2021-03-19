/* --------------------------------------------------------------
-                     Return Player Initials                    -
--------------------------------------------------------------- */

// Return initials for one type of player
export const returnPlayerInitials = (game, type) => {

    // Get the player that has this type
    // Then get the initials for this player
    let initials = game.players.filter(_player => {
        return _player.get("type") === type
    }).map(_player => {
        return _player.get("initials")
    })

    return initials;
}

// Return initials for players other than this player
export const returnOthersInitials = (game, player) => {

    // Get the types of the players other that this player
    let types = ["A", "B", "C"];
    types.splice(types.indexOf(player.get("type")), 1);

    // Get the initials for the other two players
    const initials1 = returnPlayerInitials(game, types[0]);
    const initials2 = returnPlayerInitials(game, types[1]);

    // Return them in an array to be destructured
    return ([initials1, initials2])
}

/* --------------------------------------------------------------
-                      Return Player Avatar                     -
--------------------------------------------------------------- */

// Return avatar path for one type of player
export const returnPlayerAvatar = (game, type) => {

    // Get the player that has this type
    // Then get the initials for this player
    let avatar = game.players.filter(_player => {
        return _player.get("type") === type
    }).map(_player => {
        return _player.get("avatar")
    })

    return avatar;
}

// Return avatar path for players other than this player
export const returnOthersAvatar = (game, player) => {

    // Get the types of the players other that this player
    let types = ["A", "B", "C"];
    types.splice(types.indexOf(player.get("type")), 1);

    // Get the initials for the other two players
    const avatar1 = returnPlayerAvatar(game, types[0]);
    const avatar2 = returnPlayerAvatar(game, types[1]);

    // Return them in an array to be destructured
    return ([avatar1, avatar2])
}

/* --------------------------------------------------------------
-                       Return Competition                      -
--------------------------------------------------------------- */

// Return whether a player is in competition with player 1 (A or B) and player 2 (B or C)
export const competitionWithOthers = (game, player) => {
    // Get player type
    const type = player.get("type")

    // Get types of players other than this player
    let types = ["A", "B", "C"]
    types.splice(types.indexOf(type), 1)

    // test if the there is a competition pattern with this player and player 1 (e.g., "AvB")
    const conditionForCompWithPlayer1 = JSON.parse(game.treatment.competition).filter(condition => {
        return condition.split("v").includes(type) && condition.split("v").includes(types[0])
    }).length === 1

    // test if the there is a competition pattern with this player and player 2 (e.g., "AvC")
    const conditionForCompWithPlayer2 = JSON.parse(game.treatment.competition).filter(condition => {
        return condition.split("v").includes(type) && condition.split("v").includes(types[1])
    }).length === 1

    // Return them in an array to be destructured
    return ([conditionForCompWithPlayer1, conditionForCompWithPlayer2])
}