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
            let understanding3 = this.props.player.get("understanding3");
            if (typeof understanding3 === "undefined") {
                this.props.player.set("understanding3", 0);
            }
            this.props.nextPage();
        } else {
            alert("Incorrect: You need to answer the recap question correctly before you can continue. Please try again.");
            let understanding3 = this.props.player.get("understanding3");
            if (typeof understanding3 === "undefined") {
                this.props.player.set("understanding3", 1);
            } else if (understanding3 !== 0) {
                this.props.player.set("understanding3", understanding3 + 1);
            }
        }
    };

    render() {
        const { player, game, previousPage, nextPage } = this.props;
        const { comStruct1 } = this.state;

        return (
            <div>
                <div className="quiz">
                    <h3> Recap about the Communication Structure</h3>
                    <p>
                        Please recall the information you have just read and answer the following question. You can navigate back to reread the instructions if you need.
                    </p>
                    <br />
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
                        <span>Not everyone can talk to everyone else: I can talk directly with only one player</span>
                        <br />

                        <input
                            type="radio"
                            name="comStruct1"
                            value="correct answer for player A if there is brok"
                            checked={comStruct1 === "correct answer for player A if there is brok"}
                            onChange={this.handleChange}
                        />
                        <span>The other two players can only talk through me as a "bridge"</span>
                        <br />
                    </div>

                    <p className="button-holder">
                        <button type="button" onClick={previousPage}>
                            Previous
                        </button>
                        &emsp;
                        <button type="button" onClick={this.handleSubmit}>
                            Submit Answer
                        </button>
                    </p>
                </div>
            </div>
        )
    }
}