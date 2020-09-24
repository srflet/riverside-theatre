import React, { Component } from 'react'
import { Centered } from "meteor/empirica:core";

export default class GeneralIntroduction extends Component {
    render() {
        //Empirica based properties for introductions
        const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

        return (
            <Centered>
                <div className="instructions">
                    This is the general introduction
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
