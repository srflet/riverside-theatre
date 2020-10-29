import React, { Component } from 'react'
import { Centered } from "meteor/empirica:core";
import PoliceClues from "./PoliceClues"
import PoliceImg from '../game/general-ui/decoration-img/PoliceImg';

export default class PoliceInformation extends Component {
    render() {
        //Empirica based properties for introductions
        const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

        return (
            <Centered>
                <div className="instructions">
                    <h2>Police Information</h2>

                    <PoliceImg />
                    <br />

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
                        Click to go to the next phase where we connect you with the two other players
                    </button>
                </p>
            </Centered>
        )
    }
}
