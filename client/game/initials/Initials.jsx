import React, { Component, Fragment } from 'react';

export default class Initials extends Component {
    //Setting the state of the initials
    state = {
        initials: "",
        isNextStage: false
    };

    notificationSound = new Audio("sounds/notification.mp3")

    componentDidMount() {
        if (this.props.stage.name === "initials") {
            this.notificationSound.play();
        }
    }

    //Method that ends the stage
    endStage = () => {
        this.props.player.stage.submit();
    }

    //Method to check if a string includes a number, in regex.
    //From: https://stackoverflow.com/questions/5778020/check-whether-an-input-string-contains-a-number-in-javascript
    hasNumber = myString => {
        return /\d/.test(myString);
    }

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
            this.setState({ isNextStage: true })
            this.endStage();
        }
    };

    //Rendering
    render() {
        //Only render the Initials if this is the right stage
        if (this.props.stage.name === "initials") {

            //If the player has clicked to set their initials and go to the next stage, render this message. Otherwise, ask for the i
            return (
                <div>
                    <h2> Initials </h2>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <p>
                                Note: from now on you are completing these phases simultaneously with the other two players. Be mindful of the timer.
                            </p>
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

                            <div className="button-holder"><button type="submit" disabled={this.state.isNextStage}>Submit Initials</button></div>

                            <br />
                            <p style={{ textAlign: "center" }}>NOTE: The next stage will only start once every player has submitted their initial. You can see whether players have submitted their initials by looking at the "Player Status" below.</p>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (<Fragment></Fragment>)
        }


    }
}
