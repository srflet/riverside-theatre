export const returnPlayerInitials = (game, type) => {
    let initials = game.players.filter(_player => {
        return _player.get("type") === type
    }).map(_player => {
        return _player.get("initials")
    })

    return initials;
}

export const returnOthersInitials = (game, player) => {
    let initials = ["A", "B", "C"];
    initials.splice(initials.indexOf(player.get("type")), 1);

    const initials1 = returnPlayerInitials(game, initials[0]);
    const initials2 = returnPlayerInitials(game, initials[1]);

    return ([initials1, initials2])
}

export const returnPlayerAvatar = (game, type) => {
    let avatar = game.players.filter(_player => {
        return _player.get("type") === type
    }).map(_player => {
        return _player.get("avatar")
    })

    return avatar;
}

export const returnOthersAvatar = (game, player) => {
    let initials = ["A", "B", "C"];
    initials.splice(initials.indexOf(player.get("type")), 1);

    const avatar1 = returnPlayerAvatar(game, initials[0]);
    const avatar2 = returnPlayerAvatar(game, initials[1]);

    return ([avatar1, avatar2])
}