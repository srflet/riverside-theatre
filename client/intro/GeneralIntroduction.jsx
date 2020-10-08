import React, { Component } from 'react'
import { Centered } from "meteor/empirica:core";

export default class GeneralIntroduction extends Component {
    render() {
        //Empirica based properties for introductions
        const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

        return (
            <Centered>
                <div className="instructions">
                    <h2>General Instructions</h2>
                    <p>
                        Today, we invite you to participate in a game in which you will play as a <strong>Private Investigator</strong> hired to identify the perpetrator of a car collision (think of it as a “murder mystery” puzzle). You will be given clues that will help you solve the puzzle.
         			 </p>
                    <p>
                        Importantly, using this online chatroom platform, <strong><u>you are connected to two other participants who also are trying to solve the same problem, but with different set of clues. After the initial instructions, you can choose to chat with them to exchange information.</u></strong>
                    </p>
                    <p>
                        Your compensation is comprised of two parts: <strong><u>1) a $3.00 base pay for your participation and a 2) a $1.00 bonus based on your performance.</u></strong> More details about the bonus will be explained shortly.
                    </p>
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
