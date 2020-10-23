import React, { Component } from 'react';
import { Centered } from "meteor/empirica:core";

export default class Initials extends Component {
    //Setting the state of the initials
    state = {
        initials: "",
    };

    //Updating the state of the initials when text input changes
    handleChange = e => {
        this.setState({ initials: e.currentTarget.value.trim().toUpperCase() });
    };

    //When the user submits their initials...
    handleSubmit = e => {
        //Prevent default behaviour
        e.preventDefault();

        //Check that this is 3 letters without numbers in them...
        if (this.state.initials.length !== 3) {
            //...If not, alert the user that this is wrong and they need to try again
            alert("Incorrect: Please only and include three characters (no more, no less). Please try again.");
        } else {
            //...If correct, set the players initials and end this stage for them
            this.props.player.set("initials", this.state.initials);
        }
    };

    //Rendering
    render() {
        //Empirica based properties for introductions
        const { hasPrev, hasNext, onNext, onPrev, game, player } = this.props;

        let initials = typeof player.get("initials") !== "undefined" ?
            player.get("initials") :
            "";

        return (
            <Centered>
                <div className="instructions">
                    <h2> Initials </h2>

                    {initials === "" ?
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="initials">Please enter two letters and one number as your screen name for the discussion in order to make communication with other players in the final stage easier (for a minimum and maximum of 3 characters). For example, if your name is "Jane Smith", you could write "JS7".</label>
                                <input
                                    type="text"
                                    dir="auto"
                                    id="initials"
                                    name="initials"
                                    placeholder="type screen name..."
                                    value={this.state.initials}
                                    onChange={this.handleChange}
                                    autoComplete="off"
                                    required
                                />

                                <div className="button-holder">
                                    <button type="submit">
                                        Submit Initials
                            </button>
                                </div>
                            </div>
                        </form> :
                        <div>
                            <p>
                                Thank you for submitting you initials: {player.get("initials")}.
                            </p>
                            <p className="button-holder">
                                <button type="button" onClick={onPrev} disabled={!hasPrev}>
                                    Previous
                                </button>
                                &emsp;
                                <button type="button" onClick={onNext} disabled={!hasNext}>
                                    Next
                                </button>
                            </p>
                        </div>
                    }

                </div>
            </Centered>
        )
    }
}
