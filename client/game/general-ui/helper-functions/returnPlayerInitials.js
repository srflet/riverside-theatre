export const returnPlayerInitials = (game, type) => {
    let initials = game.players.filter(_player => {
        return _player.get("type") === type
    }).map(_player => {
        return _player.get("initials")
    })

    return initials;
}