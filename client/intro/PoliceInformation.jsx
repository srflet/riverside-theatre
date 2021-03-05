import React, { Component } from 'react'
import { Centered } from "meteor/empirica:core";
import PoliceClues from "../general/clues/PoliceClues"
import DevWrapper from '../general/dev-wrapper/DevWrapper';

export default class PoliceInformation extends Component {
    render() {
        //Empirica based properties for introductions
        const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

        return (
            <DevWrapper {...this.props}>
                <Centered>
                    <div className="instructions">
                        <h2>Police Information</h2>

                        <p>
                            <strong><u>Please note that the other two players also have this information.</u></strong> Please read through them carefully, but there is no need to write them down – they will be available later.
                    </p>

                        <div><PoliceClues /></div>
                    </div>

                    {/* Empirica introduction buttons */}
                    <p className="button-holder">
                        <button type="button" onClick={onPrev} disabled={!hasPrev}>
                            Previous
                    </button>
                    &emsp;
                    <button type="button" onClick={onNext}>
                            Click to be connected with the other two players
                    </button>
                    </p>
                </Centered>
            </DevWrapper>
        )
    }
}
