import React, { Component } from 'react';

//Importing elements to populate the shape
import ComStructCompetitionDetails from './ComStructCompetitionDetails';

export default class ComStructShape extends Component {
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

        const structureProperties = {
            playerA: {
                initials: player.get("type") === "A" ? "YOU" : returnPlayerInitials("A"),
                avatar: returnPlayerAvatar("A"),
            },
            playerB: {
                initials: player.get("type") === "B" ? "YOU" : returnPlayerInitials("B"),
                avatar: returnPlayerAvatar("B"),
            },
            playerC: {
                initials: player.get("type") === "C" ? "YOU" : returnPlayerInitials("C"),
                avatar: returnPlayerAvatar("C"),
            }
        };

        return (
            <div>
                <svg width="300" height="200">

                    {/* Node Player A */}
                    <circle cx="150" cy="55" r="5" fill="black" />
                    <text x="150" y="45" fill="black" textAnchor="middle">{structureProperties.playerA.initials}</text>
                    <image x="135" y="0" href={structureProperties.playerA.avatar} height="30" width="30" />

                    {/* Node Player B */}
                    <circle cx="50" cy="150" r="5" fill="black" />
                    <text x="30" y="155" fill="black" textAnchor="middle">{structureProperties.playerB.initials}</text>
                    <image x="15" y="165" href={structureProperties.playerB.avatar} height="30" width="30" />

                    {/* Node Player C */}
                    <circle cx="250" cy="150" r="5" fill="black" />
                    <text x="270" y="155" fill="black" textAnchor="middle">{structureProperties.playerC.initials}</text>
                    <image x="255" y="165" href={structureProperties.playerC.avatar} height="30" width="30" />

                    {/* Link A and B */}
                    <line x1="150" y1="55" x2="50" y2="150" stroke="black" />

                    {/* Competition between A and B */}
                    {game.treatment.competition === "comp" && (player.get("type") === "A" || player.get("type") === "B")
                        ? <ComStructCompetitionDetails />
                        : ""}

                    {/* Link A and C */}
                    <line x1="150" y1="55" x2="250" y2="150" stroke="black" />

                    {/* Link B and C */}
                    {game.treatment.brokerage === "nonbrok" ?
                        <line x1="50" y1="150" x2="250" y2="150" stroke="black" />
                        :
                        ""}

                </svg>

            </div >
        )
    }
}
