import React, { Component } from 'react'
import { Centered } from "meteor/empirica:core";
import DoNotCross from '../game/general-ui/decoration-img/DoNotCross';

export default class Background extends Component {
    render() {
        //Empirica based properties for introductions
        const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

        return (
            <Centered>
                <div className="instructions">
                    <h2>Background</h2>
                    <DoNotCross />
                    <br />
                    <p>
                        <strong>Please imagine you are a Private Investigator</strong> or a PI (e.g. Sherlock Holmes if you will) of a new private investigator firm in New York City. Your firm has been hired by a local businessman Mr. Lee to <strong>identify the perpetrator of a terrible automobile collision</strong> that resulted in the death of his only daughter. You represent your firm in handling Mr. Lee's case.
         			 </p>
                    <p>
                        The police department has spent 8 weeks on the case but was unable to draw conclusions. But Mr. Lee has good reasons to believe it was not just an accident and has made it clear that he will spare no expense in identifying the person who is responsible for his daughter’s death.
                    </p>
                    <p>
                        He has hired you and two other private investigators from two other PI agencies to crack the case.
                    </p>
                    <p>
                        <strong>IMPORTANTLY: <u>The clues available to you are from two sources 1) notes from the police investigation, which will be shared by all three PIs 2) clues from your own independent investigations that are UNIQUE to you.</u></strong>
                    </p>
                    <p>
                        On the next page, we will first show you the notes from the police's investigation.
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
