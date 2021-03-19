import React, { Component } from 'react'
import { Centered } from "meteor/empirica:core";
import DevWrapper from '../general/dev-wrapper/DevWrapper';

import { deviceDetect } from 'react-device-detect'; // pluging to detect device information

import IntroMurderMystery from '../general/images/IntroMurderMystery'; // image

// General introduction to the game
export default class GeneralIntroduction extends Component {
    render() {
        const { hasNext, onNext, player } = this.props;

        // If not already collected, collect information on user device in case we
        // find a bug that affects only mac or pc users, etc.
        if (typeof player.get("deviceInfo") === "undefined") {
            player.set("deviceInfo", deviceDetect());
        }

        return (
            <DevWrapper {...this.props}>
                <Centered>
                    <div>
                        <h2>General Instructions</h2>

                        <IntroMurderMystery />

                        <br />

                        <p>Today, we invite you to participate in a game in which you will play as a <strong>Private Investigator</strong> hired to identify the perpetrator of a car collision (think of it as a “murder mystery” puzzle). You will be given clues that will help you solve the puzzle.</p>

                        <p>Importantly, using this online chatroom platform, <strong><u>you are connected to two other participants who also are trying to solve the same problem, but with different sets of clues. After the initial instructions, you can choose to chat with them to exchange information.</u></strong></p>

                        <br />

                        <div className="game-instructions">
                            <span>
                                Please make sure that you have <strong>sound activated</strong> on your computer as we will use light bell sounds to signal when certain phases of the study start and when you receive messages in the discussion phase of the study.
                        </span>
                        </div>
                    </div>

                    {/* Empirica introduction buttons */}
                    <p className="button-holder">
                        <button type="button" onClick={onNext} disabled={!hasNext}>
                            Next
                    </button>
                    </p>
                </Centered>
            </DevWrapper>
        )
    }
}
