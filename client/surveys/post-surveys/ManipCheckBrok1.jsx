import React, { Component } from 'react'

export default class ManipCheckBrok1 extends Component {
    state = {
        name: "ManipCheckBrok1"
    }

    handleChange = e => {
        this.props.player.set(this.state.name, e.currentTarget.value)
    }

    render() {
        const { player, currentPage, previousPage, nextPage } = this.props;

        const answers = player.get(this.state.name);

        return (
            <div>
                <p>Please select the communication diagram that best describe your experience:</p>
                <select name="communication structure" onChange={e => this.handleChange(e)} value={answers}>
                    <option value="">Select your answer</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                </select>

                <br />
                <br />

                <div style={alignBrokerGraphs}>
                    <div>
                        <p>A. Everyone can talk to everyone</p>
                        <div className="centred">
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

                    <div>
                        <p>B. Not everyone can talk to everyone else and I am the bridge that connects the two players</p>
                        <div className="centred">
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

                    <div>
                        <p>C. Not everyone can talk to everyone else, and I could only talk directly with one player</p>
                        <div className="centred">
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

                <p className="button-holder">
                    <button type="button" onClick={previousPage} disabled={currentPage === 0}>
                        Previous
                    </button>
                    &emsp;
                    <button type="button" onClick={nextPage} disabled={answers === ""}>
                        Next
                    </button>
                </p>
            </div>
        )
    }
}

//Style variables
const alignBrokerGraphs = {
    display: "flex",
    justifyContent: "space-around"
}