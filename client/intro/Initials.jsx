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
        if (this.state.initials.length !== 4) {
            //...If not, alert the user that this is wrong and they need to try again
            alert("Please only and include four characters (no more, no less)");
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
                    <h2> Screen Name </h2>

                    {initials === "" ?
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <p>
                                    Before we proceed, please enter a screen name for yourself.
                                </p>
                                <p>
                                    Please enter your initials (first and last name) and the last two digits of your UID, we will use this as your screen name later to connect you with the other two playesr in the chatroom.
                                </p>
                                <p>
                                    For instance, if your name is Jane Doe and the last digit of your UID is 75, please enter "JD75" as your screen name.
                                </p>

                                <input
                                    type="text"
                                    placeholder="Enter your screen name..."
                                    value={this.state.initials}
                                    onChange={this.handleChange}
                                    autoComplete="off"
                                    required
                                    style={{ width: "300px" }}
                                />

                                <div className="button-holder">
                                    <button type="submit">
                                        Submit Screen Name
                                    </button>
                                </div>
                            </div>
                        </form> :
                        <div>
                            <p>
                                Thank you for submitting you screen name: {player.get("initials")}.
                            </p>
                            <p>
                                For the rest of this study you will be refered to according to your screen name. The other players will see your screen name and you will be able to see theirs in key parts of the study.
                            </p>

                            <div className="game-tip">
                                <span>
                                    Please make sure that you have <strong>sound activated</strong> on your computer as we will use light bell sounds to signal when certain phases of the study start and when you receive messages in the discussion phase of the study.
                                </span>
                            </div>

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
