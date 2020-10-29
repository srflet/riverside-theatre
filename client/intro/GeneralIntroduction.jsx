import React, { Component } from 'react'
import { Centered } from "meteor/empirica:core";
import IntroMurderMystery from '../game/general-ui/decoration-img/IntroMurderMystery';
import { deviceDetect } from 'react-device-detect';

export default class GeneralIntroduction extends Component {
    render() {
        //Empirica based properties for introductions
        const { hasPrev, hasNext, onNext, onPrev, game, player } = this.props;

        if (typeof player.get("deviceInfo") === "undefined") {
            player.set("deviceInfo", deviceDetect());
        }

        return (
            <Centered>
                <div>
                    <h2>General Instructions</h2>

                    <IntroMurderMystery />

                    <ul>
                        <li>
                            Today, we invite you to participate in a game in which you will play as a <strong>Private Investigator</strong> hired to identify the perpetrator of a car collision (think of it as a “murder mystery” puzzle). You will be given clues that will help you solve the puzzle.
         			    </li>
                        <li>
                            Importantly, using this online chatroom platform, <strong><u>you are connected to two other participants who also are trying to solve the same problem, but with different sets of clues. After the initial instructions, you can choose to chat with them to exchange information.</u></strong>
                        </li>
                        <li>
                            For completion, you will receive course credit. <strong><u>Additionally, if your score is among the top 25 of all players, you will receive a $10 Amazon Gift Card.</u></strong> More details about this bonus will be explained shortly.
                        </li>
                        <li>
                            If you are ready to proceed, please click next.
                        </li>
                    </ul>
                </div>

                {/* Empirica introduction buttons */}
                <p className="button-holder">
                    <button type="button" onClick={onPrev} disabled={!hasPrev}>
                        Previous
                    </button>
                    &emsp;
                    <button type="button" onClick={onNext} disabled={!hasNext}>
                        Next
                    </button>
                </p>
            </Centered>
        )
    }
}
