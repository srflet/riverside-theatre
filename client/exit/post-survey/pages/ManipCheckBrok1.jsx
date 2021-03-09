import React, { Component } from 'react';
import ChangePageButtons from '../../../general/buttons/ChangePageButtons';

export default class ManipCheckBrok1 extends Component {
    state = {
        name: "ManipCheckBrok1"
    }

    handleChange = e => {
        this.props.player.set(this.state.name, e.currentTarget.value)
    }

    render() {
        const { player, pageDbIndex, min } = this.props;

        const answers = player.get(this.state.name) ?? ""

        return (
            <div>
                <span>Please select the communication diagram that best describes your experience: </span>
                <select name="communication structure" onChange={this.handleChange} value={answers}>
                    <option value="">Select your answer</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                </select>

                <br />
                <br />

                <div style={alignBrokerGraphs}>
                    <div style={margins}>
                        <p><strong>A.</strong> Everyone can talk to everyone</p>
                        <div className="justify-center">
                            <svg width="150" height="150">
                                {/* Node Player A */}
                                <circle cx="75" cy="25" r="5" fill="black" />
                                {/* Node Player B */}
                                <circle cx="25" cy="125" r="5" fill="black" />
                                {/* Node Player C */}
                                <circle cx="125" cy="125" r="5" fill="black" />

                                {/* Link A and B */}
                                <line x1="75" y1="25" x2="25" y2="125" stroke="black" />
                                {/* Link A and C */}
                                <line x1="75" y1="25" x2="125" y2="125" stroke="black" />
                                {/* Link B and C */}
                                <line x1="25" y1="125" x2="125" y2="125" stroke="black" />
                            </svg>
                        </div>
                    </div>

                    <div style={margins}>
                        <p><strong>B.</strong> Not everyone can talk to everyone else and I am the bridge that connects the two players</p>
                        <div className="justify-center">
                            <svg width="150" height="150">
                                {/* Node Player A */}
                                <circle cx="75" cy="25" r="5" fill="black" />
                                <text x="75" y="15" fill="black" textAnchor="middle">You</text>
                                {/* Node Player B */}
                                <circle cx="25" cy="125" r="5" fill="black" />
                                {/* Node Player C */}
                                <circle cx="125" cy="125" r="5" fill="black" />

                                {/* Link A and B */}
                                <line x1="75" y1="25" x2="25" y2="125" stroke="black" />
                                {/* Link A and C */}
                                <line x1="75" y1="25" x2="125" y2="125" stroke="black" />
                            </svg>
                        </div>
                    </div>

                    <div style={margins}>
                        <p><strong>C.</strong> Not everyone can talk to everyone else, and I could only talk directly with one player</p>
                        <div className="justify-center">
                            <svg width="150" height="150">
                                {/* Node Player A */}
                                <circle cx="75" cy="25" r="5" fill="black" />
                                {/* Node Player B */}
                                <circle cx="25" cy="125" r="5" fill="black" />
                                <text x="25" y="145" fill="black" textAnchor="middle">(You)</text>
                                {/* Node Player C */}
                                <circle cx="125" cy="125" r="5" fill="black" />
                                {/* Link A and B */}
                                <line x1="75" y1="25" x2="25" y2="125" stroke="black" />
                                {/* Link A and C */}
                                <line x1="75" y1="25" x2="125" y2="125" stroke="black" />
                            </svg>
                        </div>
                    </div>
                </div>

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} disabledCondition={answers === ""} />
            </div>
        )
    }
}

//Style variables
const alignBrokerGraphs = {
    display: "flex",
    justifyContent: "space-around"
}

const margins = {
    margin: "10px",
}