export const returnPlayerAvatar = (game, type) => {
    let avatar = game.players.filter(_player => {
        return _player.get("type") === type
    }).map(_player => {
        return _player.get("avatar")
    })

    return avatar;
}