import React, { Component } from 'react';
import { returnPlayerInitials } from '../../../general-ui/helper-functions/returnPlayerInitials';
import { returnPlayerAvatar } from '../../../general-ui/helper-functions/returnPlayerAvatar';

export default class PresComStructInstructions extends Component {
    render() {
        const { game, player } = this.props;

        const player1Initials =
            player.get("type") === "A" ?
                returnPlayerInitials(game, "B") :
                (player.get("type") === "C" ? returnPlayerInitials(game, "A") : returnPlayerInitials(game, "C"));
        const player2Initials =
            player.get("type") === "B" ?
                returnPlayerInitials(game, "A") :
                (player.get("type") === "C" ? returnPlayerInitials(game, "B") : returnPlayerInitials(game, "C"));


        const player1Avatar =
            player.get("type") === "A" ?
                returnPlayerAvatar(game, "B") :
                (player.get("type") === "C" ? returnPlayerAvatar(game, "A") : returnPlayerAvatar(game, "C"));
        const player2Avatar =
            player.get("type") === "B" ?
                returnPlayerAvatar(game, "A") :
                (player.get("type") === "C" ? returnPlayerAvatar(game, "B") : returnPlayerAvatar(game, "C"));

        if (game.treatment.brokerage === "brok") {

            if (player.get("type") === "A") {
                return (
                    <div>
                        <p>
                            <strong><u>The firms have decided on a discussion coordinator and they happened to choose you.</u></strong>
                        </p>
                        <p>
                            Below is a graphic aid to help you visualize the communication structure.
                        </p>
                        <p>
                            As this graphic aid illustrates, <strong><u>you are the “bridge” that connects the other two players {returnPlayerInitials(game, "B")} and {returnPlayerInitials(game, "C")}. Only you can communicate directly with them, and they CANNOT communicate with each other without going through you.</u></strong>
                        </p>
                    </div>
                )
            } else {
                if (player.get("type") === "B") {
                    return (
                        <div>
                            <p>
                                <strong><u>The firms have decided on a discussion coordinator and they happened to choose {returnPlayerInitials(game, "A")}.</u></strong>
                            </p>
                            <p>
                                Below is a graphic aid to help you visualize the communication structure.
                            </p>
                            <p>
                                As this graphic aid illustrates, <strong><u>{returnPlayerInitials(game, "A")} is the “bridge” that connects you to the other player {returnPlayerInitials(game, "C")}. You can directly communicate with {returnPlayerInitials(game, "A")} but NOT with {returnPlayerInitials(game, "C")}. In other words, if you want to communicate with {returnPlayerInitials(game, "C")}, you will have to do so indirectly via {returnPlayerInitials(game, "A")}</u></strong>
                            </p>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <p>
                                <strong><u>The firms have decided on a discussion coordinator and they happened to choose {returnPlayerInitials(game, "A")}.</u></strong>
                            </p>
                            <p>
                                Below is a graphic aid to help you visualize the communication structure.
                            </p>
                            <p>
                                As this graphic aid illustrates, <strong><u>{returnPlayerInitials(game, "A")} is the “bridge” that connects you to the other player {returnPlayerInitials(game, "B")}. You can directly communicate with {returnPlayerInitials(game, "A")} but NOT with {returnPlayerInitials(game, "B")}. In other words, if you want to communicate with {returnPlayerInitials(game, "B")}, you will have to do so indirectly via {returnPlayerInitials(game, "A")}</u></strong>
                            </p>
                        </div>
                    )
                }
            }

        } else {
            return (
                <div>
                    <p>
                        <strong><u>The firms have decided on a “free to speak” discussion where every player can directly talk with one another.</u></strong>
                    </p>
                    <p>
                        Below is a graphic aid to help you visualize the communication structure.
                    </p>
                    <p>
                        As this graphic aid illustrates, <strong><u>{player1Initials} and {player2Initials} are the other two players. You can directly talk with either of them in the upcoming discussion page. Similarly, they can also talk with each other freely.</u></strong>
                    </p>
                </div>
            )
        }
    }
}