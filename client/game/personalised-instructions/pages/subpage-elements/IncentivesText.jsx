import React, { Component } from 'react';
import { returnPlayerInitials } from '../../../general-ui/helper-functions/returnPlayerInitials';
import { returnPlayerAvatar } from '../../../general-ui/helper-functions/returnPlayerAvatar';

export default class IncentivesText extends Component {
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
                        <div className="incentives">
                            <p>
                                Now, you should know that your firm is currently competing with {returnPlayerInitials(game, "B")}'s firm on another large contract with a different client.
                            </p>
                            <p>
                                Your boss informed you that if you outperform {returnPlayerInitials(game, "B")} in this game, your firm has a high chance of winning that contract.
                            </p>
                            <p>
                                In order to outperform {returnPlayerInitials(game, "B")} in this game, your boss has told you that <strong> you need to collect more clues than {returnPlayerInitials(game, "B")} <img src={returnPlayerAvatar(game, "B")} style={mediumImageBold} /></strong> in the upcoming discussion among the three players.
                            </p>
                            <p>
                                If you correctly identify the guilty person, you will earn 10 points.
                            </p>
                            <p>
                                In addition, <strong>for every clue you collect more than {returnPlayerInitials(game, "B")} <img src={returnPlayerAvatar(game, "B")} style={mediumImageBold} />, you will be awarded 5 points.</strong> For instance, if you collect 4 whereas {returnPlayerInitials(game, "B")} collects only 1 clue, you will be awarded 15 points.
                            </p>
                            <p>
                                The third player in today's game ({returnPlayerInitials(game, "C")}) operates in a different market and so is not in any competition with you.
                            </p>
                            <p>
                                At the end of the study, if your final score places you in the top 25 of the game, you will receive a $10 Amazon Gift Card.
                            </p>
                        </div>
                    </div>
                )
            } else if (player.get("type") === "B") {
                return (
                    <div>
                        <div className="incentives">
                            <p>
                                Now, you should know that your firm is currently competing with {returnPlayerInitials(game, "A")}'s firm on another large contract with a different client.
                        </p>
                            <p>
                                Your boss informed you that if you outperform {returnPlayerInitials(game, "A")} in this game, your firm has a high chance of winning that contract.
                        </p>
                            <p>
                                In order to outperform {returnPlayerInitials(game, "A")} in this game, your boss has told you that <strong> you need to collect more clues than {returnPlayerInitials(game, "A")} <img src={returnPlayerAvatar(game, "A")} style={mediumImageBold} /></strong> in the upcoming discussion among the three players.
                        </p>
                            <p>
                                If you correctly identify the guilty person, you will earn 10 points.
                        </p>
                            <p>
                                In addition, <strong>for every clue you collect more than {returnPlayerInitials(game, "A")} <img src={returnPlayerAvatar(game, "A")} style={mediumImageBold} />, you will be awarded 5 points.</strong> For instance, if you collect 4 whereas {returnPlayerInitials(game, "A")} collects only 1 clue, you will be awarded 15 points.
                        </p>
                            <p>
                                The third player in today's game ({returnPlayerInitials(game, "C")}) operates in a different market and so is not in any competition with you.
                        </p>
                            <p>
                                At the end of the study, if your final score places you in the top 25 of the game, you will receive a $10 Amazon Gift Card.
                        </p>
                        </div>
                    </div>
                )
            }
        } else {
            //If there isn't competition or you are player C...
            //...render the same page for all:
            return (
                <div>
                    <div className="incentives">
                        <p>
                            Now, you should know that your firm is a relatively new firm that is working hard to establish a good reputation in the business.
                        </p>
                        <p>
                            Your boss has informed you that if you do well on this high-profile case with Mr. Lee, it will be a big boost to the firm’s reputation.
                        </p>
                        <p>
                            In order to correctly identify the guilty person, <strong><u>you need to collect as many clues from others as possible</u></strong> in the upcoming discussion among the three players.
                        </p>
                        <p>
                            Only by maximizing the number of unique clues you collect from others, you will have the best chance of solving this game.
                        </p>
                        <p>
                            If you correctly identify the guilty person, you will earn 10 points.
                        </p>
                        <p>
                            In addition, for every unique clue you collect from others, you will be awarded 2 points. For instance, if you collect a total of 3 unique clues from the other two players, you will be awarded 6 points.
                        </p>
                        <p>
                            At the end of the study, if your final score places you in the top 25 of the game, you will receive a $10 Amazon Gift Card.
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
    verticalAlign: "top"
};

const mediumImageBold = {
    width: "2.5rem",
    height: "2.5rem",
    verticalAlign: "top"
};

const aligning = {
    display: "flex",
    alignItems: "center"
}