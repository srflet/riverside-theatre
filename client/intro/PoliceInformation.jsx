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
                    <h1>This is the police information</h1>
                    <PoliceClues />
                </div>

                {/* Empirica introduction buttons */}
                <p>
                    <button type="button" onClick={onPrev} disabled={!hasPrev}>
                        Previous
                    </button>
                    <button type="button" onClick={onNext} disabled={!hasNext}>
                        Next
                    </button>
                </p>
            </Centered>
        )
    }
}
