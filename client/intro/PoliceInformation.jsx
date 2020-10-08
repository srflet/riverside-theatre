import React, { Component } from 'react'
import { Centered } from "meteor/empirica:core";
import PoliceClues from "./PoliceClues"

export default class PoliceInformation extends Component {
    render() {
        //Empirica based properties for introductions
        const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

        return (
            <Centered>
                <div className="instructions">
                    <h2>Police Information</h2>
                    <p>
                        <strong><u>Please note that there is NO false information below and the other two participants also have this information.</u></strong> Please read through them carefully, but there is no need to write them down – they will be available later.
                    </p>

                    <div><PoliceClues /></div>

                    <div>
                        In the next steps, you will:
                    </div>
                    <ol>
                        <li>answer some comprehension questions</li>
                        <li>provide initials that can be used as your screen name in the discussion phase of this study</li>
                        <li>read further clues and instructions about the task</li>
                        <li>chat with the two other private investigators during the discussion phase</li>
                        <li>answer some survey questions</li>
                    </ol>
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
