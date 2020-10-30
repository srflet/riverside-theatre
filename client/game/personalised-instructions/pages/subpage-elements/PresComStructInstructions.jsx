import React, { Component } from 'react';
import { returnPlayerInitials } from '../../../general-ui/helper-functions/returnPlayerInitials';
import { returnPlayerAvatar } from '../../../general-ui/helper-functions/returnPlayerAvatar';

export default class PresComStructInstructions extends Component {
    render() {
        const { game, player, isDiscussion } = this.props;

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
                            The firms have decided on a discussion coordinator and they happened to choose you.
                        </p>
                        {
                            isDiscussion
                                ? ""
                                : <p>
                                    Below is a graphic aid to help you visualize the communication structure.
                        </p>
                        }
                        <p>
                            As this graphic aid illustrates, you are the “bridge” that connects the other two players {returnPlayerInitials(game, "B")} <img src={returnPlayerAvatar(game, "B")} style={mediumImageBold} /> and {returnPlayerInitials(game, "C")} <img src={returnPlayerAvatar(game, "C")} style={mediumImageBold} />. Only you can communicate directly with them, and they CANNOT communicate with each other without going through you.
                        </p>
                    </div>
                )
            } else {
                if (player.get("type") === "B") {
                    return (
                        <div>
                            <p>
                                The firms have decided on a discussion coordinator and they happened to choose {returnPlayerInitials(game, "A")} <img src={returnPlayerAvatar(game, "A")} style={mediumImageBold} />.
                            </p>
                            {
                                isDiscussion
                                    ? ""
                                    : <p>
                                        Below is a graphic aid to help you visualize the communication structure.
                        </p>
                            }
                            <p>
                                As this graphic aid illustrates, {returnPlayerInitials(game, "A")} <img src={returnPlayerAvatar(game, "A")} style={mediumImageBold} /> is the “bridge” that connects you to the other player {returnPlayerInitials(game, "C")} <img src={returnPlayerAvatar(game, "C")} style={mediumImageBold} />. You can directly communicate with {returnPlayerInitials(game, "A")} <img src={returnPlayerAvatar(game, "A")} style={mediumImageBold} /> but NOT with {returnPlayerInitials(game, "C")} <img src={returnPlayerAvatar(game, "C")} style={mediumImageBold} />. In other words, if you want to communicate with {returnPlayerInitials(game, "C")} <img src={returnPlayerAvatar(game, "C")} style={mediumImageBold} />, you will have to do so indirectly via {returnPlayerInitials(game, "A")} <img src={returnPlayerAvatar(game, "C")} style={mediumImageBold} />
                            </p>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <p>
                                The firms have decided on a discussion coordinator and they happened to choose {returnPlayerInitials(game, "A")} <img src={returnPlayerAvatar(game, "A")} style={mediumImageBold} />.
                            </p>
                            {
                                isDiscussion
                                    ? ""
                                    : <p>
                                        Below is a graphic aid to help you visualize the communication structure.
                        </p>
                            }
                            <p>
                                As this graphic aid illustrates, {returnPlayerInitials(game, "A")} <img src={returnPlayerAvatar(game, "A")} style={mediumImageBold} /> is the “bridge” that connects you to the other player {returnPlayerInitials(game, "B")} <img src={returnPlayerAvatar(game, "B")} style={mediumImageBold} />. You can directly communicate with {returnPlayerInitials(game, "A")} <img src={returnPlayerAvatar(game, "A")} style={mediumImageBold} /> but NOT with {returnPlayerInitials(game, "B")} <img src={returnPlayerAvatar(game, "B")} style={mediumImageBold} />. In other words, if you want to communicate with {returnPlayerInitials(game, "B")} <img src={returnPlayerAvatar(game, "B")} style={mediumImageBold} />, you will have to do so indirectly via {returnPlayerInitials(game, "A")} <img src={returnPlayerAvatar(game, "A")} style={mediumImageBold} />.
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

//Style variables
const mediumImageBold = {
    width: "2.5rem",
    height: "2.5rem",
    verticalAlign: "top"
};