import React, { Component } from 'react';

export default class TestComStruct extends Component {
    state = {
        comStruct1: "",
    };

    handleChange = e => {
        const element = e.currentTarget;
        this.setState({ [element.name]: element.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        let comStruct1Condition =
            (this.state.comStruct1 === "correct answer for nonbrok" && this.props.game.treatment.brokerage === "nonbrok") ||
            (this.state.comStruct1 === "correct answer for player B or C if there is brok" && this.props.player.get("type") !== "A" && this.props.game.treatment.brokerage === "brok") ||
            (this.state.comStruct1 === "correct answer for player A if there is brok" && this.props.player.get("type") === "A" && this.props.game.treatment.brokerage === "brok");

        if (comStruct1Condition) {
            this.props.player.stage.submit();
        } else {
            alert("Incorrect: You need to answer the quiz correctly before you can continue. Please try again.");
        }
    };

    render() {
        const { player, game, previousPage, nextPage } = this.props;
        const { comStruct1 } = this.state;

        return (
            <div>
                <div className="quiz">
                    <h3> Quiz About the Communication Structure</h3>
                    <p>
                        Please carefully answer the following comprehension questions. You need to answer each question correctly before you can continue on to the next phase of the study. You can navigate back to reread the instructions if you need.
                    </p>
                    <div>
                        <p>Please select the statement that best describes your communication structure (who you can talk to):</p>
                        <input
                            type="radio"
                            name="comStruct1"
                            value="correct answer for nonbrok"
                            checked={comStruct1 === "correct answer for nonbrok"}
                            onChange={this.handleChange}
                        />
                        <span>Everyone can talk to everyone else, meaning every player can talk to the other two players</span>
                        <br />

                        <input
                            type="radio"
                            name="comStruct1"
                            value="correct answer for player B or C if there is brok"
                            checked={comStruct1 === "correct answer for player B or C if there is brok"}
                            onChange={this.handleChange}
                        />
                        <span>Not everyone can talk to everyone else, I can talk directly with only one player</span>
                        <br />

                        <input
                            type="radio"
                            name="comStruct1"
                            value="correct answer for player A if there is brok"
                            checked={comStruct1 === "correct answer for player A if there is brok"}
                            onChange={this.handleChange}
                        />
                        <span>Correct answer for player A and condition brok</span>
                        <br />
                    </div>

                    <p className="button-holder">
                        <button type="button" onClick={previousPage}>
                            Previous
                        </button>
                        &emsp;
                        <button type="button" onClick={this.handleSubmit} disabled={this.props.player.stage.submitted}>
                            Submit answers and finish this stage
                        </button>
                    </p>

                    <br />
                    <p style={{ textAlign: "center" }}>NOTE: The next stage will only start once every player has submitted their answers and read all of the instructions. You can see whether players have finished reading the instructions by looking at the "Player Status" below. In the meantime you can continue browsing the instructions.</p>
                </div>
            </div>
        )
    }
}