import React, { Component } from 'react'

export default class PresComStructInstructions extends Component {
    render() {
        const { game, player } = this.props;

        const returnPlayerInitials = (type) => {
            let initials = game.players.filter(player => {
                return player.get("type") === type
            }).map(player => {
                return player.get("initials")
            })

            return initials;
        }

        const returnPlayerAvatar = (type) => {
            let avatar = game.players.filter(player => {
                return player.get("type") === type
            }).map(player => {
                return player.get("avatar")
            })

            return avatar;
        }

        if (game.treatment.brokerage === "brok") {

            if (player.get("type") === "A") {
                return (
                    <div>
                        <p>
                            <strong><u>
                                Mr. Lee has asked that the discussion to be coordinated by one of the three PIs and he happened to choose you.
                        </u></strong>
                            You will see that you have two separate dialogue boxes on your screen during the discussion, each will allow you to communicate with the other PIs.
                    </p>
                    </div>
                )
            } else {
                return (
                    <div>
                        <p>
                            <strong><u>
                                Mr. Lee has asked that the discussion to be coordinated by one of the three PIs and he happened to choose you.
                        </u></strong>
                            You will see that you have one dialogue boxes on your screen during the discussion, will allow you to communicate with {returnPlayerInitials("A") + " "}
                            <img src={returnPlayerAvatar("A")} style={miniAvatar} />.
                    </p>
                    </div>
                )
            }

        } else {
            return (
                <div>
                    <p>
                        <strong><u>
                            Mr. Lee has asked that the three PIs talk freely to one another.
                        </u></strong>
                            You will see that you have two separate dialogue boxes on your screen during the discussion, each will allow you to communicate with the other PIs.
                    </p>
                </div>
            )
        }
    }
}

//Style variables
const miniAvatar = {
    width: "2rem",
    height: "2rem",
};