import React, { Component } from 'react';
import { Centered } from "meteor/empirica:core";
import DevWrapper from '../general/dev-wrapper/DevWrapper';
import ChangePageButtons from '../general/buttons/ChangePageButtons';

export default class Initials extends Component {
    // Setting the state of the initials
    state = {
        initials: "",
    };

    // Updating the state of the initials when text input changes
    // if initials are below 4
    handleChange = e => {
        const value = e.currentTarget.value
        if (value.length <= 20) {
            this.setState({ initials: value });
        }
    };

    // When the user submits their initials...
    handleSubmit = e => {
        // Prevent default behaviour
        e.preventDefault();

        // Get the entered initials
        const { initials } = this.state

        // Check that this is 4 characters...
        if (isNaN(initials.slice(-2))) {
            // ...If not, alert the user that this is wrong and they need to try again
            alert("Error: Your screen name should include 2 digits at the end");
        } else {
            // ...If correct, set the players initials and end this stage for them
            this.props.player.set("initials", initials);
        }
    };

    render() {
        const { hasPrev, hasNext, onNext, onPrev, player, pageDbIndex, min } = this.props;

        // Get the player's initials, if they have no initials, ask them for initials. 
        // If they have initials, show the thank you message with the initials
        let initials = player.get("initials") ?? "";

        return (
            <DevWrapper {...this.props}>
                <Centered>
                    <div className="instructions">
                        <h2> Screen Name </h2>

                        {initials === "" ?
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <p>
                                        To begin our exercise, please enter your <strong>first name with a two-digit number of your choice</strong>; we will use this as your screen name later to connect you with your teammate, and the other two teams.
                                    </p>

                                    <p>
                                        For instance, if your first name is Tom and you choose the number 45, then please enter “Tom45” as your screen name.
                                    </p>

                                    <input
                                        type="text"
                                        placeholder="Enter your screen name..."
                                        value={this.state.initials}
                                        onChange={this.handleChange}
                                        autoComplete="off"
                                        autoFocus
                                        required
                                        style={{ width: "300px" }}
                                    />

                                    <div className="button-holder">
                                        <button type="button" onClick={onPrev} disabled={!hasPrev}>
                                            Previous
                                    </button>
                                    &emsp;
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
                                    For the rest of this study you will be refered to as {player.get("initials")}. The other players will see your screen name and you will be able to see theirs in key parts of the study.
                                </p>

                                <div className="game-instructions">
                                    <p>
                                        Please make sure that you have <strong>sound activated</strong> on your computer as we will use light bell sounds to signal when certain phases of the study start and when you receive messages in the discussion phase of the study.
                                    </p>
                                    
                                    <p>
                                        If you encounter a problem or a blank page for more than a few seconds, <strong>please feel free to refresh the page.</strong>
                                    </p>

                                    <p> 
                                        Please press the submit button to continue. <strong>You will enter a lobby and wait a maximum of 3 minutes while we connect you with other players.</strong>
                                    </p>
                                </div>

                                <p className="button-holder">
                                    <button type="submit" onClick={onNext}>Submit and join the lobby</button>
                                </p>
                         </div>
                        }

                    </div>
                </Centered>
            </DevWrapper>
        )
    }
}
