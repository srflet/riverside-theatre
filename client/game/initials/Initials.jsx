import React, { Component, Fragment } from 'react';

export default class Initials extends Component {
    //Setting the state of the initials
    state = {
        initials: "",
        isNextStage: false
    };

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
        if (this.state.initials.length !== 3 || this.hasNumber(this.state.initials)) {
            //...If not, alert the user that this is wrong and they need to try again
            alert("Incorrect: Please only include letters (no numbers) and include three letters (no more, no less). Please try again.");
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
        if (this.props.stage.name == "initials") {

            //If the player has clicked to set their initials and go to the next stage, render this message. Otherwise, ask for the i
            return (
                <div>
                    <h2> Initials </h2>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="initials">Please insert your initials plus a random letter so to make communication with other players in the final stage easier (for a minimum and maximum of 3 letters). For example, if your name is "Jane Smith", you could write "JSD".</label>
                            <input
                                type="text"
                                dir="auto"
                                id="initials"
                                name="initials"
                                placeholder="e.g. JSD"
                                value={this.state.initials}
                                onChange={this.handleChange}
                                autoComplete="off"
                                required
                            />

                            {/* If the initials have been submitted, show this message. Otherwise, show the button to submit the initials */}
                            <div className="button-holder"><button type="submit" disabled={this.state.isNextStage}>Submit Initials</button></div>

                        </div>
                    </form>
                </div>
            )
        } else {
            return (<Fragment></Fragment>)
        }


    }
}
