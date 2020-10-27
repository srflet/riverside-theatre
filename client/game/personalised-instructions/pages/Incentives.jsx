import React, { Component } from 'react';
import BonusImg from '../../general-ui/decoration-img/BonusImg';

export default class Incentives extends Component {
    render() {
        //Getting whether this is a condition with competition
        const { player, game } = this.props;

        const returnPlayerInitials = (type) => {
            let initials = game.players.filter(player => {
                return player.get("type") === type
            }).map(player => {
                return player.get("initials")
            })

            return initials;
        }

        //Render according to the competition condition:
        if (game.treatment.competition === "comp" && player.get("type") !== "C") {
            //If there is competition...
            //...render page according to player:
            if (player.get("type") === "A") {
                return (
                    <div>
                        <h3>Incentives</h3>
                        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <div>
                                <p>
                                    Now, you should know that your firm is <strong><u>currently competing with {returnPlayerInitials("B")}'s (will be visibly marked RED later in the discussion) firm on another large contract with a different client.</u></strong> Your boss informed you that if you outperform {returnPlayerInitials("B")} in this case, your firm has a high chance of winning that contract.
                                </p>
                                <p>
                                    The third player in today's game ({returnPlayerInitials("C")}) operates in a different market and so is not in any competition with you.
                                </p>
                                <p>
                                    In order to win the new contract, your boss has told you that in the following discussion between the three players, <strong><u>you need to OUTPERFORM {returnPlayerInitials("B")} BY COLLECTING MORE CLUES THAN {returnPlayerInitials("B")}.</u></strong> In other words, you will need to <u>try and get as many clues as possible as possible</u> from the other two players, and at the same time, <u>ensuring that {returnPlayerInitials("B")} does not collect more clues than you</u>.
                                </p>
                                <p>
                                    To reflect this competition, at the end of the game, <strong><u>For every clue you collect more than {returnPlayerInitials("B")}, you will be awarded 5 points.</u></strong> For instance, if you collect 3 more pieces of information than {returnPlayerInitials("B")}, you will be awarded 15 points.
                                </p>
                                <p>
                                    <strong><u>At the end of the study, if your final score places top 25 in the game, you will receive a $10 Amazon Gift Card.</u></strong>
                                </p>
                            </div>
                            <div style={{ marginLeft: "2rem" }}>
                                <BonusImg />
                            </div>
                        </div>
                    </div>
                )
            } else if (player.get("type") === "B") {
                return (
                    <div>
                        <h3>Incentives</h3>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <p>
                                    Now, you should know that your firm is <strong><u>currently competing with {returnPlayerInitials("A")}'s (will be visibly marked RED later in the discussion) firm on another large contract with a different client.</u></strong> Your boss informed you that if you outperform {returnPlayerInitials("A")} in this case, your firm has a high chance of winning that contract.
                                </p>
                                <p>
                                    The third player in today's game ({returnPlayerInitials("C")}) operates in a different market and so is not in any competition with you.
                                </p>
                                <p>
                                    In order to win the new contract, your boss has told you that in the following discussion between the three players, <strong><u>you need to OUTPERFORM {returnPlayerInitials("A")} BY COLLECTING MORE CLUES THAN {returnPlayerInitials("A")}.</u></strong> In other words, you will need to <u>try and get as many clues as possible as possible</u> from the other two players, and at the same time, <u>ensuring that {returnPlayerInitials("A")} does not collect more clues than you</u>.
                                </p>
                                <p>
                                    To reflect this competition, at the end of the game, <strong><u>For every clue you collect more than {returnPlayerInitials("A")}, you will be awarded 5 points.</u></strong> For instance, if you collect 3 more pieces of information than {returnPlayerInitials("A")}, you will be awarded 15 points.
                                </p>
                                <p>
                                    <strong><u>At the end of the study, if your final score places top 25 in the game, you will receive a $10 Amazon Gift Card.</u></strong>
                                </p>
                            </div>
                            <div style={{ marginLeft: "2rem" }}>
                                <BonusImg />
                            </div>
                        </div>
                    </div>
                )
            }
        } else {
            //If there isn't competition or you are player C...
            //...render the same page for all:
            return (
                <div>
                    <h3>Incentives</h3>
                    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                        <div>
                            <p>
                                Now, you should know that <strong><u>your firm is a relatively new firm that is working hard to establish a good reputation in the business.</u></strong> Your boss informed you that if you do well this high-profile case with Mr. Lee, it will be a big boost to the firm’s reputation.
                            </p>
                            <p>
                                In order to correctly identify the guilty person, your boss told you that in the following discussion between the three players, <strong><u>you need to COLLECT AS MANY CLUES FROM OTHERS AS POSSIBLE.</u></strong> Only by maximizing the number of unique clues you collect from others, you will have the best chance of solving this game.
                            </p>
                            <p>
                                To reflect this situation, at the end of the game, <strong><u>For every unique clue you collect from others, you will be awarded 2 points.</u></strong> For instance, if you collect a total of 3 pieces of unique clues from the other two players, you will be awarded 6 points.
                            </p>
                            <p>
                                <strong><u>At the end of the study, if your final score places top 25 in the game, you will receive a $10 Amazon Gift Card.</u></strong>
                            </p>
                        </div>
                        <div style={{ marginLeft: "2rem" }}>
                            <BonusImg />
                        </div>
                    </div>
                </div>
            )
        }
    }
}