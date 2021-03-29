import React, { Component } from 'react';

// Functions to get information from the other players
import { returnPlayerInitials, returnPlayerAvatar } from '../helper-functions/returnPlayerInformation'

export default class ComStructShape extends Component {
    render() {
        const { game, player, showCompetition = true } = this.props
        // By default you want to show competition

        // Get the player type and prepare what the structure will look like depending on the player's type
        const myType = player.get("type")
        const structureProperties = {
            playerA: {
                initials: myType === "A" ? "YOU" : returnPlayerInitials(game, "A"),
                avatar: returnPlayerAvatar(game, "A"),
            },
            playerB: {
                initials: myType === "B" ? "YOU" : returnPlayerInitials(game, "B"),
                avatar: returnPlayerAvatar(game, "B"),
            },
            playerC: {
                initials: myType === "C" ? "YOU" : returnPlayerInitials(game, "C"),
                avatar: returnPlayerAvatar(game, "C"),
            }
        };

        // Get the communication and competition arrays
        const communication = JSON.parse(game.treatment.communication)
        const competition = JSON.parse(game.treatment.competition)

        // Create an SVG with 3 notes and edges between them
        // If there is competition add red lines with the word "competition"
        return (
            <div>
                <svg width="300" height="200">

                    {/* Node Player A */}
                    <circle cx="150" cy="55" r="5" fill="black" />
                    <text x="150" y="45" fill="black" textAnchor="middle" style={{ fontSize: "12pt" }}>{structureProperties.playerA.initials}</text>
                    <image x="135" y="0" href={structureProperties.playerA.avatar} height="30" width="30" />
                    {/* Node Player B */}
                    <circle cx="50" cy="150" r="5" fill="black" />
                    <text x="20" y="155" fill="black" textAnchor="middle" style={{ fontSize: "12pt" }}>{structureProperties.playerB.initials}</text>
                    <image x="10" y="165" href={structureProperties.playerB.avatar} height="30" width="30" />
                    {/* Node Player C */}
                    <circle cx="250" cy="150" r="5" fill="black" />
                    <text x="280" y="155" fill="black" textAnchor="middle" style={{ fontSize: "12pt" }}>{structureProperties.playerC.initials}</text>
                    <image x="270" y="165" href={structureProperties.playerC.avatar} height="30" width="30" />

                    {/* Link A and B */}
                    {communication.includes("AcB") &&
                        <line x1="150" y1="55" x2="50" y2="150" stroke="black" />
                    }
                    {/* Link A and C */}
                    {communication.includes("AcC") &&
                        <line x1="150" y1="55" x2="250" y2="150" stroke="black" />
                    }
                    {/* Link B and C */}
                    {communication.includes("BcC") &&
                        <line x1="50" y1="150" x2="250" y2="150" stroke="black" />
                    }

                    {showCompetition && <CompetitionLinks myType={myType} competition={competition} />}

                </svg>

            </div >
        )
    }
}

// Component that makes the competition links
class CompetitionLinks extends Component {
    render() {
        const { myType, competition } = this.props

        return (
            <>
                {/* Competition between A and B */}
                {competition.includes("AvB") &&
                    <>
                        <polyline points="145,55 140,55 50,140 50,145" style={{ fill: "none", stroke: "red" }} />
                        <text x="50" y="85" fill="red" textAnchor="middle" style={{ fontSize: "12pt" }}>Competition</text>
                    </>
                }
                {/* Competition between A and C */}
                {competition.includes("AvC") &&
                    <>
                        <polyline points="155,55 160,55 250,140 250,145" style={{ fill: "none", stroke: "red" }} />
                        <text x="250" y="85" fill="red" textAnchor="middle" style={{ fontSize: "12pt" }}>Competition</text>
                    </>
                }
                {/* Competition between B and C */}
                {competition.includes("BvC") &&
                    <>
                        <polyline points="50,155 50,160 250,160 250,155" style={{ fill: "none", stroke: "red" }} />
                        <text x="150" y="180" fill="red" textAnchor="middle" style={{ fontSize: "12pt" }}>Competition</text>
                    </>
                }
            </>
        )
    }
}

