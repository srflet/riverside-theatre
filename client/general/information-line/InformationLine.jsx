import React, { Component } from 'react'
import Timer from '../timer/Timer'

export default class InformationLine extends Component {
    render() {
        const { game, round, stage, player } = this.props

        return (
            <div style={{
                display: "flex"
                , justifyContent: "space-between"
            }}>
                <MyProfile player={player} />

                <div style={{
                    textAlign: "center"
                    , display: "flex"
                    , flexDirection: "column"
                }}>
                    <span><strong>Other Player Status</strong></span>
                    <div className="justify-center-middle">
                        {game.players.map((_player, index) => {
                            if (_player._id !== player._id) {
                                return (
                                    <PlayerProfile key={index} player={_player} />
                                )
                            }
                        })}
                    </div>
                </div>

                <Timer round={round} stage={stage} />
            </div>
        )
    }
}

class Check extends Component {
    render() {
        const { player } = this.props

        return (
            <>
                {
                    player.stage.submitted
                        ? <img src="/img/validation/check.png" style={mediumImage} />
                        : <img src="/img/validation/cross.png" style={mediumImage} />
                }
            </>
        )
    }
}


export class MyProfile extends Component {
    render() {
        const { player, hideCheck } = this.props

        return (
            <div style={{
                textAlign: "center"
                , display: "flex"
                , flexDirection: "column"
            }}>
                <span><strong>Your Profile</strong></span>
                <div className="justify-center-middle">
                    {player.get("initials")}
                    {<img src={player.get("avatar")} className="avatar-medium" />}
                    {!hideCheck && <Check player={player} />}
                </div>
            </div>
        )
    }
}

class PlayerProfile extends Component {
    render() {
        const { player } = this.props

        return (
            <div>
                {<img src={player.get("avatar")} className="avatar-medium" />}
                <Check player={player} />
            </div>
        )
    }
}


// Style variables
const mediumImage = {
    width: "2.5rem",
    height: "2.5rem",
    margin: "0"
};
