import React, { Component } from 'react';
import { returnPlayerInitials } from '../../../general/helper-functions/returnPlayerInitials';
import { returnPlayerAvatar } from '../../../general/helper-functions/returnPlayerAvatar';

export default class TestIncentives extends Component {
    state = {
        incentives1: ""
    };

    handleChange = e => {
        const element = e.currentTarget;
        this.setState({ [element.name]: element.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        let incentives1Condition =
            (this.state.incentives1 === "correct answer for player A and competition" && this.props.player.get("type") === "A" && this.props.game.treatment.competition === "comp") ||
            (this.state.incentives1 === "correct answer for player B and competition" && this.props.player.get("type") === "B" && this.props.game.treatment.competition === "comp") ||
            (this.state.incentives1 === "correct answer for no competition or player C" && (this.props.player.get("type") === "C" || this.props.game.treatment.competition === "noncomp"));

        if (incentives1Condition) {
            let understanding2 = this.props.player.get("understanding2");
            if (typeof understanding2 === "undefined") {
                this.props.player.set("understanding2", 0);
            }
            this.props.nextPage();
        } else {
            alert("Incorrect: You need to answer the recap question correctly before you can continue. Please try again.");
            let understanding2 = this.props.player.get("understanding2");
            if (typeof understanding2 === "undefined") {
                this.props.player.set("understanding2", 1);
            } else if (understanding2 !== 0) {
                this.props.player.set("understanding2", understanding2 + 1);
            }
        }
    };

    render() {
        const { player, game, previousPage, nextPage } = this.props;
        const { incentives1 } = this.state;

        const player1 =
            player.get("type") === "A" ?
                returnPlayerInitials(game, "B") :
                (player.get("type") === "C" ? returnPlayerInitials(game, "A") : returnPlayerInitials(game, "C"));
        const player2 =
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

        return (
            <div>
                <div className="quiz">
                    <h3>Recap about the Incentives</h3>
                    <p>
                        Please recall the information you have just read and answer the following question. You can navigate back to reread the instructions if you need.
                    </p>
                    <br />
                    <div>
                        <p>In this game, I am in direct competition with:</p>
                        <input
                            type="radio"
                            name="incentives1"
                            value="correct answer for player A and competition"
                            checked={incentives1 === "correct answer for player A and competition"}
                            onChange={this.handleChange}
                        />
                        <span>Player {player1} <img src={player1Avatar} style={mediumImage} /></span>

                        <br />

                        <input
                            type="radio"
                            name="incentives1"
                            value="correct answer for player B and competition"
                            checked={incentives1 === "correct answer for player B and competition"}
                            onChange={this.handleChange}
                        />
                        <span>Player {player2} <img src={player2Avatar} style={mediumImage} /></span>
                        <br />

                        <input
                            type="radio"
                            name="incentives1"
                            value="incorrect answer"
                            checked={incentives1 === "incorrect answer"}
                            onChange={this.handleChange}
                        />
                        <span>Both</span>
                        <br />

                        <input
                            type="radio"
                            name="incentives1"
                            value="correct answer for no competition or player C"
                            checked={incentives1 === "correct answer for no competition or player C"}
                            onChange={this.handleChange}
                        />
                        <span>No one: there is no competition</span>
                    </div>

                    <p className="button-holder">
                        <button type="button" onClick={previousPage}>
                            Previous
                        </button>
                        &emsp;
                        <button type="button" onClick={this.handleSubmit}>
                            Submit Answers
                        </button>
                    </p>
                </div>
            </div >
        )
    }
}

//Style variables
const mediumImage = {
    width: "2.5rem",
    height: "2.5rem",
    margin: "0",
    verticalAlign: "top"
};