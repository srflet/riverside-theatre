import React, { Component } from 'react';

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

        const returnPlayerAvatar = (type) => {
            let avatar = game.players.filter(player => {
                return player.get("type") === type
            }).map(player => {
                return player.get("avatar")
            })

            return avatar;
        }

        //Render according to the competition condition:
        if (game.treatment.competition === "comp" && player.get("type") !== "C") {
            //If there is competition...
            //...render page according to player:
            if (player.get("type") === "A") {
                return (
                    <div>
                        <h3>Incentives</h3>
                        <p>Now, You should know that your compensation for this study is made of two parts.</p>
                        <p>First, upon completion, you will be compensated for $3.00 dollars.</p>
                        <p>
                            Second, your firm is competing with {returnPlayerInitials("B") + " "}
                            <img src={returnPlayerAvatar("B")} style={miniAvatar} />'s firm on another large contract (whose name will be marked in RED in the discussion phase). Your boss informed you that if you outperform {returnPlayerInitials("B") + " "}
                            <img src={returnPlayerAvatar("B")} style={miniAvatar} /> in this case, your firm will win that contract.
                        </p>
                        <p>
                            To reflect this situation, if <strong>you outperform {returnPlayerInitials("B") + " "}
                                <img src={returnPlayerAvatar("B")} style={miniAvatar} />, you will additionally receive a $1.00 dollar, equivalent to a 33% bonus on top of the base pay.</strong>
                        </p>
                        <p>
                            Game tip: <strong>The more information you collect, the greater the chances that you will outperform {returnPlayerInitials("B") + " "}<img src={returnPlayerAvatar("B")} style={miniAvatar} />.</strong> This means that you need to collect more pieces of unique information
                        </p>
                    </div>

                )
            } else if (player.get("type") === "B") {
                return (
                    <div>
                        <h3>Incentives</h3>
                        <p>Now, You should know that your compensation for this study is made of two parts.</p>
                        <p>First, upon completion, you will be compensated for $3.00 dollars.</p>
                        <p>
                            Second, your firm is competing with {returnPlayerInitials("A") + " "}
                            <img src={returnPlayerAvatar("A")} style={miniAvatar} />'s firm on another large contract (whose name will be marked in RED in the discussion phase). Your boss informed you that if you outperform {returnPlayerInitials("A") + " "}
                            <img src={returnPlayerAvatar("A")} style={miniAvatar} /> in this case, your firm will win that contract.
                        </p>
                        <p>
                            To reflect this situation, if <strong>you outperform {returnPlayerInitials("A") + " "}
                                <img src={returnPlayerAvatar("A")} style={miniAvatar} />, you will additionally receive a $1.00 dollar, equivalent to a 33% bonus on top of the base pay.</strong>
                        </p>
                        <p>
                            Game tip: <strong>The more information you collect, the greater the chances that you will outperform {returnPlayerInitials("B") + " "}<img src={returnPlayerAvatar("A")} style={miniAvatar} />.</strong> This means that you need to collect more pieces of unique information
                        </p>
                    </div>
                )
            }
        } else {
            //If there isn't competition or you are player C...
            //...render the same page for all:
            return (
                <div>
                    <h3>Incentives</h3>
                    <p>Now, You should know that your compensation for this study is made of two parts.</p>
                    <p>First, upon completion, you will be compensated for $3.00 dollars.</p>
                    <p>
                        Second, your firm is a relatively new firm that is working hard to establish a good reputation in the business. Your boss informed you that if you do well this high-profile case with Mr. Lee by correctly identifying the guilty person, it will be a big boost to the firm's reputation.
                    </p>
                    <p>
                        To reflect this situation, if <strong>you correctly identify the guilty person, you will additionally receive a $1.00 dollar, equivalent to a 33% bonus on top of the base pay.</strong>
                    </p>
                    <p>
                        Game tip: <strong>The more information you collect, the greater the chances that you will be successful.</strong> This means that you need to collect more pieces of unique information.
                    </p>
                </div>
            )
        }
    }
}

//Style variables
const miniAvatar = {
    width: "2rem",
    height: "2rem",
};