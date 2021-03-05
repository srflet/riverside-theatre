import React, { Component } from 'react';
import { returnOthersInitials, returnOthersAvatar } from '../../../general/helper-functions/returnPlayerInformation';

export default class TestIncentives extends Component {
    state = {
        incentives1: ""
    };

    componentDidMount() {
        this.props.scrollToTop();
    }

    previous = () => {
        const { player, pageDbIndex } = this.props;
        let currentPage = player.get(pageDbIndex);
        currentPage--;
        player.set(pageDbIndex, currentPage);
    }

    next = () => {
        const { player, pageDbIndex, max } = this.props;
        let currentPage = player.get(pageDbIndex);
        currentPage++;

        if (currentPage > max) {
            player.stage.submit();
        } else {
            player.set(pageDbIndex, currentPage);
        }
    }

    handleChange = e => {
        const element = e.currentTarget;
        this.setState({ [element.name]: element.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { player, game } = this.props;

        let incentives1Condition =
            (this.state.incentives1 === "correct answer for player A and competition" && player.get("type") === "A" && game.treatment.competition === "comp") ||
            (this.state.incentives1 === "correct answer for player B and competition" && player.get("type") === "B" && game.treatment.competition === "comp") ||
            (this.state.incentives1 === "correct answer for no competition or player C" && (player.get("type") === "C" || game.treatment.competition === "noncomp"));

        if (incentives1Condition) {
            let understanding2 = player.get("understanding2");
            if (typeof understanding2 === "undefined") {
                player.set("understanding2", 0);
            }
            this.next();
        } else {
            alert("Incorrect: You need to answer the recap question correctly before you can continue. Please try again.");
            let understanding2 = player.get("understanding2");
            if (typeof understanding2 === "undefined") {
                player.set("understanding2", 1);
            } else if (understanding2 !== 0) {
                player.set("understanding2", understanding2 + 1);
            }
        }
    };

    render() {
        const { player, game } = this.props;
        const { incentives1 } = this.state;

        const [player1Initials, player2Initials] = returnOthersInitials(game, player);
        const [player1Avatar, player2Avatar] = returnOthersAvatar(game, player);

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
                        <span>Player {player1Initials} <img src={player1Avatar} style={mediumImage} /></span>

                        <br />

                        <input
                            type="radio"
                            name="incentives1"
                            value="correct answer for player B and competition"
                            checked={incentives1 === "correct answer for player B and competition"}
                            onChange={this.handleChange}
                        />
                        <span>Player {player2Initials} <img src={player2Avatar} style={mediumImage} /></span>
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
                        <button type="button" onClick={this.previous}>
                            Previous
                        </button>
                        &emsp;
                        <button type="button" onClick={this.handleSubmit}>
                            Submit Answer
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