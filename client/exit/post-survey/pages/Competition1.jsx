import React, { Component } from 'react'
// Functions to get information from the other players
import { returnPlayerInitials, returnPlayerAvatar } from '../../../general/helper-functions/returnPlayerInformation'

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons';

export default class Competition1 extends Component {
    state = {
        name: "competition1"
    }

    // Scroll to the top when this component starts
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleChange = e => {
        this.props.player.set(this.state.name, e.currentTarget.value)
    }

    render() {
        const { player, pageDbIndex, min } = this.props;

        // Get the players answers for this survey, if they don't have any, set an empty string
        const answers = player.get(this.state.name) ?? ""

        // Check whether participants can select the correct communication graph
        return (
            <div>
                <span>Please select the diagram that best describes the relationships among the three players: </span>
                <select name="communication structure" onChange={this.handleChange} value={answers}>
                    <option value="">Select your answer</option>
                    <option value="competitionClosure">A</option>
                    <option value="competitionBrokerage">B</option>
                    <option value="competitionAB">C</option>
                    <option value="noCompetition">D</option>
                </select>

                <br />
                <br />

                <div style={alignBrokerGraphs}>
                    <div style={shape}>
                        <p><strong>A.</strong></p>
                        <div className="justify-center">
                            <div>
                                <Shape {...this.props} competition={["AvB", "AvC", "BvC"]} />
                                <p style={descriptionText}>Everyone was competing with everyone else</p>
                            </div>
                        </div>
                    </div>

                    <div style={shape}>
                        <p><strong>B.</strong></p>
                        <div className="justify-center">
                            <div>
                                <Shape {...this.props} competition={["AvB", "AvC"]} />
                                <p style={descriptionText}>There was one player who was competing against two other players</p>
                            </div>
                        </div>
                    </div>

                    <div style={shape}>
                        <p><strong>C.</strong></p>
                        <div className="justify-center">
                            <div>
                                <Shape {...this.props} competition={["AvB"]} />
                                <p style={descriptionText}>There was one player who was competing against one other player</p>
                            </div>

                        </div>
                    </div>

                    <div style={shape}>
                        <p><strong>D.</strong></p>
                        <div className="justify-center">
                            <div>
                                <Shape {...this.props} competition={[]} />
                                <p style={descriptionText}>There were no competitive relationships between the players</p>
                            </div>

                        </div>
                    </div>
                </div>

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} disabledCondition={answers === ""} />
            </div>
        )
    }
}

class Shape extends Component {
    render() {
        const { game, player, competition } = this.props
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
                    <line x1="150" y1="55" x2="50" y2="150" stroke="black" />

                    {/* Link A and C */}
                    <line x1="150" y1="55" x2="250" y2="150" stroke="black" />

                    {/* Link B and C */}
                    <line x1="50" y1="150" x2="250" y2="150" stroke="black" />

                    {<CompetitionLinks competition={competition} />}

                </svg>

            </div >
        )
    }
}

// Component that makes the competition links
class CompetitionLinks extends Component {
    render() {
        const { competition } = this.props

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

//Style variables
const alignBrokerGraphs = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
}

const shape = {
    border: "1px solid black"
    , borderRadius: "1rem"
    , padding: "1rem"
    , margin: "20px"
}

const descriptionText = {
    textAlign: "center",
    width: "300px"
}
