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
        const { incentives1 } = this.state;
        const type = player.get("type")

        const types = ["A", "B", "C"]
        types.splice(types.indexOf(type), 1)

        const competition = JSON.parse(game.treatment.competition)

        const conditionForCompWithPlayer1 = competition.filter(condition => {
            return condition.split("v").includes(type) && condition.split("v").includes(types[0])
        }).length === 1

        const conditionForCompWithPlayer2 = competition.filter(condition => {
            return condition.split("v").includes(type) && condition.split("v").includes(types[1])
        }).length === 1

        const correctAnswer = conditionForCompWithPlayer1 && conditionForCompWithPlayer2 ? "both"
            : conditionForCompWithPlayer1 ? "otherPlayer1"
                : conditionForCompWithPlayer2 ? "otherPlayer2"
                    : "none"


        if (incentives1 === correctAnswer) {
            let understanding = player.get("understanding-incentive") ?? 0;
            player.set("understanding-incentive", understanding);
            this.next();
        } else if (incentives1 === "") {
            alert("Please select an answer")
        } else {
            alert("Incorrect: You need to answer the recap question correctly before you can continue. Please try again.");
            let understanding = player.get("understanding-incentive") ?? 0;
            understanding++
            player.set("understanding-incentive", understanding);
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

                        <div className="radio-list">
                            <input
                                type="radio"
                                name="incentives1"
                                value="otherPlayer1"
                                checked={incentives1 === "otherPlayer1"}
                                onChange={this.handleChange}
                            />
                            <span>Player {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" /></span>
                            <br />
                        </div>

                        <div className="radio-list">
                            <input
                                type="radio"
                                name="incentives1"
                                value="otherPlayer2"
                                checked={incentives1 === "otherPlayer2"}
                                onChange={this.handleChange}
                            />
                            <span>Player {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" /></span>
                            <br />
                        </div>

                        <div className="radio-list">
                            <input
                                type="radio"
                                name="incentives1"
                                value="both"
                                checked={incentives1 === "both"}
                                onChange={this.handleChange}
                            />
                            <span>Both</span>
                            <br />
                        </div>

                        <div className="radio-list">
                            <input
                                type="radio"
                                name="incentives1"
                                value="none"
                                checked={incentives1 === "none"}
                                onChange={this.handleChange}
                            />
                            <span>No one</span>
                            <br />
                        </div>

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
