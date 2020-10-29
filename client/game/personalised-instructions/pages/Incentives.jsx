import React, { Component } from 'react';
import IncentivesHeader from './subpage-elements/IncentivesHeader';
import { returnPlayerInitials } from '../../general-ui/helper-functions/returnPlayerInitials';
import { returnPlayerAvatar } from '../../general-ui/helper-functions/returnPlayerAvatar';

export default class Incentives extends Component {
    render() {
        //Getting whether this is a condition with competition
        const { player, game } = this.props;

        //Render according to the competition condition:
        if (game.treatment.competition === "comp" && player.get("type") !== "C") {
            //If there is competition...
            //...render page according to player:
            if (player.get("type") === "A") {
                return (
                    <div>
                        <IncentivesHeader />
                        <div>
                            <div className="game-tip" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                You are competing with player {returnPlayerInitials(game, "B")} <img src={returnPlayerAvatar(game, "B")} style={mediumImage} />
                            </div>
                            <br />
                            <p>
                                Now, you should know that your firm is <strong><u>currently competing with {returnPlayerInitials(game, "B")}'s (will be visibly marked RED later in the discussion) firm on another large contract with a different client.</u></strong> Your boss informed you that if you outperform {returnPlayerInitials(game, "B")} in this case, your firm has a high chance of winning that contract.
                            </p>
                            <p>
                                The third player in today's game ({returnPlayerInitials(game, "C")}) operates in a different market and so is not in any competition with you.
                            </p>
                            <p>
                                In order to win the new contract, your boss has told you that in the following discussion between the three players, <strong><u>you need to OUTPERFORM {returnPlayerInitials(game, "B")} BY COLLECTING MORE CLUES THAN {returnPlayerInitials(game, "B")}.</u></strong> In other words, you will need to <u>try and get as many clues as possible</u> from the other two players, and at the same time, <u>ensuring that {returnPlayerInitials(game, "B")} does not collect more clues than you</u>.
                            </p>
                            <p>
                                To reflect this competition, at the end of the game, <strong><u>For every clue you collect more than {returnPlayerInitials(game, "B")}, you will be awarded 5 points.</u></strong> For instance, if you collect 3 more clues than {returnPlayerInitials(game, "B")}, you will be awarded 15 points.
                            </p>
                            <p>
                                <strong><u>At the end of the study, if your final score places top 25 in the game, you will receive a $10 Amazon Gift Card.</u></strong>
                            </p>
                        </div>
                    </div>

                )
            } else if (player.get("type") === "B") {
                return (
                    <div>
                        <IncentivesHeader />
                        <div>
                            <div className="game-tip" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                You are competing with player {returnPlayerInitials(game, "A")} <img src={returnPlayerAvatar(game, "A")} style={mediumImage} />
                            </div>
                            <br />
                            <p>
                                Now, you should know that your firm is <strong><u>currently competing with {returnPlayerInitials(game, "A")}'s (will be visibly marked RED later in the discussion) firm on another large contract with a different client.</u></strong> Your boss informed you that if you outperform {returnPlayerInitials(game, "A")} in this case, your firm has a high chance of winning that contract.
                            </p>
                            <p>
                                The third player in today's game ({returnPlayerInitials(game, "C")}) operates in a different market and so is not in any competition with you.
                            </p>
                            <p>
                                In order to win the new contract, your boss has told you that in the following discussion between the three players, <strong><u>you need to OUTPERFORM {returnPlayerInitials(game, "A")} BY COLLECTING MORE CLUES THAN {returnPlayerInitials(game, "A")}.</u></strong> In other words, you will need to <u>try and get as many clues as possible</u> from the other two players, and at the same time, <u>ensuring that {returnPlayerInitials(game, "A")} does not collect more clues than you</u>.
                            </p>
                            <p>
                                To reflect this competition, at the end of the game, <strong><u>For every clue you collect more than {returnPlayerInitials(game, "A")}, you will be awarded 5 points.</u></strong> For instance, if you collect 3 more clues than {returnPlayerInitials(game, "A")}, you will be awarded 15 points.
                            </p>
                            <p>
                                <strong><u>At the end of the study, if your final score places top 25 in the game, you will receive a $10 Amazon Gift Card.</u></strong>
                            </p>
                        </div>
                    </div >
                )
            }
        } else {
            //If there isn't competition or you are player C...
            //...render the same page for all:
            return (
                <div>
                    <IncentivesHeader />
                    <div>
                        <div className="game-tip" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            You are trying to collect as many unique clues from the other players as possible
                        </div>
                        <br />
                        <p>
                            Now, you should know that <strong><u>your firm is a relatively new firm that is working hard to establish a good reputation in the business.</u></strong> Your boss has informed you that if you do well on this high-profile case with Mr. Lee, it will be a big boost to the firm’s reputation.
                        </p>
                        <p>
                            In order to correctly identify the guilty person, your boss told you that in the following discussion between the three players, <strong><u>you need to COLLECT AS MANY CLUES FROM OTHERS AS POSSIBLE.</u></strong> Only by maximizing the number of unique clues you collect from others, you will have the best chance of solving this game.
                        </p>
                        <p>
                            To reflect this situation, at the end of the game, <strong><u>For every unique clue you collect from others, you will be awarded 2 points.</u></strong> For instance, if you collect a total of 3 unique clues from the other two players, you will be awarded 6 points.
                        </p>
                        <p>
                            <strong><u>At the end of the study, if your final score places top 25 in the game, you will receive a $10 Amazon Gift Card.</u></strong>
                        </p>
                    </div>
                </div>
            )
        }
    }
}

//Style variables
const mediumImage = {
    width: "2.5rem",
    height: "2.5rem",
    margin: "0"
};