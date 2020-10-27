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

        const otherPlayerThanA = player.get("type") === "B" || player.get("type") === "A" ? "C" : "B";

        if (game.treatment.brokerage === "brok") {

            if (player.get("type") === "A") {
                return (
                    <div>
                        <p>
                            <strong><u>The firms decided on a discussion coordinator and they happened to choose you.</u></strong>
                        </p>
                        <p>
                            Below is a graphic aid to help you visualize the communication structure.
                        </p>
                        <p>
                            AS this graphic illustrates, <strong><u>you are the “bridge” that connects the other two players {returnPlayerInitials("B")} and {returnPlayerInitials("C")}. Only you can communicate directly with them, and they CANNOT communicate with each other without going through you.</u></strong>
                        </p>
                    </div>
                )
            } else {
                return (
                    <div>
                        <p>
                            <strong><u>The firms decided on a discussion coordinator and they happened to choose {returnPlayerInitials("A")}.</u></strong>
                        </p>
                        <p>
                            Below is a graphic aid to help you visualize the communication structure.
                        </p>
                        <p>
                            AS this graphic illustrates, <strong><u>{returnPlayerInitials("A")} is the “bridge” that connects you to the other player {returnPlayerInitials(otherPlayerThanA)}. You can directly communicate with {returnPlayerInitials("A")} but NOT with {returnPlayerInitials(otherPlayerThanA)}. In other words, if you want to communicate with {returnPlayerInitials(otherPlayerThanA)}, you will have to do so indirectly via {returnPlayerInitials("A")}</u></strong>
                        </p>
                    </div>
                )
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
                        AS this graphic illustrates, <strong><u>{returnPlayerInitials(otherPlayerThanA)} and {player.get("type") === "A" ? returnPlayerInitials("C") : returnPlayerInitials("A")} are the other two players. You can directly talk with either of them in the upcoming discussion page. Similarly, they can also talk with eac other freely.</u></strong>
                    </p>
                </div>
            )
        }
    }
}