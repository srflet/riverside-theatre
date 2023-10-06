import React, { Component } from 'react'
// Functions to get information from the other players
import { returnOtherTeams, returnOthersAvatar, returnPlayerAvatar } from '../../../../general/helper-functions/returnPlayerInformation';


// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../../general/buttons/ChangePageButtons';

export default class Communication extends Component {
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
        const { player, pageDbIndex, min, game } = this.props;

        // Get the players answers for this survey, if they don't have any, set an empty string
        const answers = player.get(this.state.name) ?? ""

        const myTeam = player.get("team")
        const [otherTeam1, otherTeam2] = returnOtherTeams(game, player)

        let comsStruct1 = ["RcB", "RcG", "BcG"]
        let comsStruct2 = ["RcB", "RcG"]
        // if (myTeam === "Red") {
        //     comsStruct1 = ["RcB", "RcG"]
        //     comsStruct2 = ["RcB", "BcG"]
        // } else if (myTeam === "Blue") {
        //     comsStruct1 = ["RcB", "BcG"]
        //     comsStruct2 = ["RcG", "RcB"]
        // } else {
        //     comsStruct1 = ["RcG", "BcG"]
        //     comsStruct2 = ["RcB", "RcG"]
        // }

        

        // Check whether participants can select the correct communication graph // TODO change how these answers are stored
        return (
            <div>
                <span>Please select the diagram that best describes the relationships among the three teams: </span>
                <select name="communication structure" onChange={this.handleChange} value={answers}>
                    <option value="">Select your answer</option>
                    <option value="closure">A</option>
                    <option value="focalBrokerage">B</option> 
                    <option value="nonfocalBrokerage">C</option>
                </select>

                <br />
                <br />

                <div style={alignBrokerGraphs}>
                    <div style={shape}>
                        <p><strong>A.</strong></p>
                        <div className="justify-center">
                            <div>
                                <p style={descriptionText}>In the discussion between teams, all three teams could communicate with each other freely</p>

                                <Shape {...this.props} communication={comsStruct1} option="A"/>
                            </div>
                        </div>
                    </div>

                    <div style={shape}>
                        <p><strong>B.</strong></p>
                        <div className="justify-center">
                            <div>
                                <p style={descriptionText}>Not all teams could communicate directly with each other, my team was the “bridge team” that connect the other two teams</p>

                                <Shape {...this.props} communication={comsStruct2} option="B"/>
                            </div>
                        </div>
                    </div>

                    <div style={shape}>
                        <p><strong>C.</strong></p>
                        <div className="justify-center">
                            <div>
                                <p style={descriptionText}>Not all teams could communicate directly with each other, my team had to rely on a “bridge team” to indirectly communicate with the other team</p>

                                <Shape {...this.props} communication={comsStruct2} option="C"/>
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
        const { game, player, communication, option } = this.props
        // By default you want to show competition

        // Get the player type and prepare what the structure will look like depending on the player's type
        const myTeam = player.get("team")
        const structureProperties = {
            playerA: {
                initials: option === "A" ? myTeam === "Red" ? "Your Team" : "" : option === "B" ? "You Team" : "" 
            },
            playerB: {
                initials: option === "A" ? myTeam === "Blue" ? "Your Team" : "" : option === "C" ?  myTeam !== "Green" ? "Your Team" : "" : "",

            },
            playerC: {
                initials: option === "A" ? myTeam === "Green" ? "Your Team": "" : option === "C" ? myTeam === "Green" ? "Your Team" : "" : "" 
            }
        };

        // testing
        // const communication = ["RcB", "RcG"]
        // const competition = ["RvB", "RvG", "BvG"]

        // Create an SVG with 3 notes and edges between them
        // If there is competition add red lines with the word "competition"
        return (
            <div>
                <svg width="450" height="200">

                    {/* Node Player A */}
                    <circle cx="200" cy="55" r="5" fill="black" />
                    <text x="195" y="45" fill="black" textAnchor="middle" style={{ fontSize: "14pt" }}>{structureProperties.playerA.initials}</text>
                    <image x="185" y="0" href={structureProperties.playerA.avatar} height="30" width="30" />
                    {/* Node Player B */}
                    <circle cx="105" cy="150" r="5" fill="black" />
                    <text x="52.5" y="155" fill="black" textAnchor="middle" style={{ fontSize: "14pt" }}>{structureProperties.playerB.initials}</text>
                    <image x="45" y="165" href={structureProperties.playerB.avatar} height="30" width="30" />
                    {/* Node Player C */}
                    <circle cx="305" cy="150" r="5" fill="black" />
                    <text x="365" y="155" fill="black" textAnchor="middle" style={{ fontSize: "14pt" }}>{structureProperties.playerC.initials}</text>
                    <image x="365" y="165" href={structureProperties.playerC.avatar} height="30" width="30" />

                    {/* Link A and B */}
                    {communication.includes("RcB") &&
                        <line x1="200" y1="55" x2="105" y2="150" stroke="black" />
                    }
                    {/* Link A and C */}
                    {communication.includes("RcG") &&
                        <line x1="200" y1="55" x2="305" y2="150" stroke="black" />
                    }
                    {/* Link B and C */}
                    {communication.includes("BcG") &&
                        <line x1="105" y1="150" x2="305" y2="150" stroke="black" />
                    }

                </svg>

            </div >
        )
    }
}

//Style variables
const alignBrokerGraphs = {
    display: "flex",
    justifyContent: "center"
}

const shape = {
    border: "1px solid black"
    , borderRadius: "1rem"
    , padding: "1rem"
    , margin: "20px"
}

const descriptionText = {
    textAlign: "center",
    width: "450px"
}
