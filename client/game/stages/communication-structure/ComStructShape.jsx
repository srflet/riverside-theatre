import React, { Component } from 'react';

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

        const structureProperties = {
            playerA: player.get("type") === "A" ? "YOU" : returnPlayerInitials("A"),
            playerB: player.get("type") === "B" ? "YOU" : returnPlayerInitials("B"),
            playerC: player.get("type") === "C" ? "YOU" : returnPlayerInitials("C")
        };

        return (
            <div>
                <svg width="300" height="200">

                    {/* Node Player A */}
                    <circle cx="150" cy="50" r="40" stroke="grey" strokeWidth="1" fill="#d8fffe" />
                    <text x="138" y="55" fill="black">{structureProperties.playerA}</text>

                    {/* Node Player B */}
                    <circle cx="50" cy="150" r="40" stroke="grey" strokeWidth="1" fill="#d8fffe" />
                    <text x="38" y="155" fill="black">{structureProperties.playerB}</text>

                    {/* Node Player C */}
                    <circle cx="250" cy="150" r="40" stroke="grey" strokeWidth="1" fill="#d8fffe" />
                    <text x="238" y="155" fill="black">{structureProperties.playerC}</text>

                    {/* Link A and B */}
                    <line x1="150" y1="90" x2="50" y2="110" stroke="grey" />

                    {/* Link A and C */}
                    <line x1="150" y1="90" x2="250" y2="110" stroke="grey" />

                    {/* Link B and C */}
                    {game.treatment.brokerage === "nonbrok" ?
                        <line x1="90" y1="150" x2="210" y2="150" stroke="grey" />
                        :
                        ""}

                </svg>

            </div>
        )
    }
}
