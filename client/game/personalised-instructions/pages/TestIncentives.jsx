import React, { Component } from 'react';
import { returnPlayerInitials } from '../../general-ui/helper-functions/returnPlayerInitials';

export default class TestIncentives extends Component {
    state = {
        incentives1: "",
        incentives2: ""
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

        let incentives2Condition =
            (this.state.incentives2 === "correct answer for competition and players A or B" && this.props.player.get("type") !== "C" && this.props.game.treatment.competition === "comp") ||
            (this.state.incentives2 === "correct answer for no competition or player C" && (this.props.player.get("type") === "C" || this.props.game.treatment.competition === "noncomp"));

        if (incentives1Condition && incentives2Condition) {
            this.props.nextPage();
        } else {
            alert("Incorrect: You need to answer the quiz correctly before you can continue. Please try again.");
        }
    };

    render() {
        const { player, game, previousPage, nextPage } = this.props;
        const { incentives1, incentives2 } = this.state;

        const player1 =
            player.get("type") === "A" ?
                returnPlayerInitials(game, "B") :
                (player.get("type") === "C" ? returnPlayerInitials(game, "A") : returnPlayerInitials(game, "C"));
        const player2 =
            player.get("type") === "B" ?
                returnPlayerInitials(game, "A") :
                (player.get("type") === "C" ? returnPlayerInitials(game, "B") : returnPlayerInitials(game, "C"));

        return (
            <div>
                <div className="quiz">
                    <h3>Recap about the Incentives</h3>
                    <p>
                        Please recall the information you have just read and answer the following questions. You need to answer each question correctly before you can continue on to the next phase of the study. You can navigate back to reread the instructions if you need.
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
                        <span>Player {player1}</span>
                        <br />

                        <input
                            type="radio"
                            name="incentives1"
                            value="correct answer for player B and competition"
                            checked={incentives1 === "correct answer for player B and competition"}
                            onChange={this.handleChange}
                        />
                        <span>Player {player2}</span>
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

                    <br />

                    <div>
                        <p>Please select the statement that best describes your bonus structure:</p>
                        <input
                            type="radio"
                            name="incentives2"
                            value="correct answer for competition and players A or B"
                            checked={incentives2 === "correct answer for competition and players A or B"}
                            onChange={this.handleChange}
                        />
                        <span>If I score more points than my competitor, I will have a chance at winning a $10 Amazon gift card.</span>
                        <br />
                        <input
                            type="radio"
                            name="incentives2"
                            value="correct answer for no competition or player C"
                            checked={incentives2 === "correct answer for no competition or player C"}
                            onChange={this.handleChange}
                        />
                        <span>If I correctly solve who is responsible for the death of Mr. Lee’s daughter, I will have a chance at winning $10 Amazon gift card.</span>
                        <br />
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
            </div>
        )
    }
}