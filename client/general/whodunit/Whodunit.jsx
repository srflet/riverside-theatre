import React, { Component } from 'react'

// This is one component that makes it easy to create whodunit questions
// Allows you to ask the initial and final verdict from the players

export default class Whodunit extends Component {
    // Set initial probabilities to 0
    state = {
        Smith: 0,
        son: 0,
        Davis: 0,
        Anderson: 0
    }

    // If a value change, update the state
    handleChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }

    // Get the player's verdict based on which type of verdict was passed down in the props (initials or final)
    getVerdict = () => {
        const { player, whichVerdict } = this.props;
        const dbWhodunit = whichVerdict === "initial" ? "initialWhodunit" : "finalWhodunit";
        return player.get(dbWhodunit)
    }

    // Submit verdict
    handleSubmit = e => {
        e.preventDefault();

        const { player, whichVerdict } = this.props;

        // Get the current probabilities set in the state
        const whodunit = this.state;
        // Get the type of verdict was passed down in the props (initials or final)
        const dbWhodunit = whichVerdict === "initial" ? "initialWhodunit" : "finalWhodunit";
        // Set this to the player
        player.set(dbWhodunit, whodunit);
    }

    // Check how many % have been allocated in the state
    howManyPer = () => {

        // Get the current probabilities set in the state
        const whodunit = this.state;

        // Go through each key to get the verdict given, and then reduce them to one sum
        const sumOfVerdicts = Object.keys(whodunit).map(key => {
            return whodunit[key]
        }).reduce((total, value) => {
            return Number(total) + Number(value)
        })

        return sumOfVerdicts
    }

    // Function to check that there are no negative values
    noNegative = () => {
        // Get the current probabilities set in the state
        const whodunit = this.state;

        // Go through each key to get the verdict given, and then filter to find negative values
        const isNoNegative = Object.keys(whodunit).map(key => {
            return whodunit[key]
        }).filter(value => {
            return Number(value) < 0
        }).length === 0

        return isNoNegative
    }

    render() {
        const { player, whichVerdict } = this.props;
        const howManyPer = this.howManyPer()

        return (
            <div>
                <div>
                    <p className="whodunit-instructions-1">
                        The boss at your firm has asked you to provide your {whichVerdict} verdict. There are four potential suspects for the collision, but only one of them is responsibile for the collision. For each suspect, please indicate how probable you think it is that they are responsible for the collision. Split 100% between these four suspects by writing the probability of them being responsible for the collison in the box next to their name.
                    </p>
                    <p className="whodunit-instructions-2">
                        For example, if you think they are all equally as likely to have caused the collision, then write 25 next to each of their names. However, if you think one suspect is more likely to be responsible than another, this would decrease the likelihood of the others being responsible (i.e., increase one number and decrease some or all of the others). If you think it is impossible for a suspect to be responsible for the collision you would allocate them a 0. Hence, the total must be 100.
                    </p>

                    {/* Create each WhodunitInput based on the randomised whodunit order of the player */}
                    <ul>
                        {player.get("whodunit-order").map((person, index) =>
                            <WhodunitInput
                                key={index}
                                handleChange={this.handleChange}
                                text={person.text}
                                name={person.name}
                                value={this.state[person.name]}
                                getVerdict={this.getVerdict}
                            />
                        )}
                    </ul>
                </div>

                {/* If the player has already submitted their verdict, show a thank you message. 
                Otherwise, show the message checking the % and asking them to provided their verdict */}
                {this.getVerdict()
                    ? <div className="justify-center"><p className="whodunit-thankyou">Thank you for providing your {whichVerdict} verdict.</p></div>
                    : <>
                        <div className="justify-center">
                            <p className={howManyPer !== 100 || !this.noNegative() ? "whodunit-total whodunit-red" : "whodunit-total whodunit-green"}>
                                You have allocated {howManyPer}% {(howManyPer !== 100 || !this.noNegative()) && "- Your allocations between the suspects should be equal to 100% with no negative values"}!
                            </p>
                        </div>

                        <p className="button-holder">
                            <button onClick={this.handleSubmit} disabled={howManyPer !== 100 || !this.noNegative()}>Give my verdict</button>
                        </p>
                    </>
                }

            </div>
        )
    }
}

// A line in the list with the name of the suspect, a box to enter the probability and %
class WhodunitInput extends Component {
    render() {
        const { handleChange, text, name, value, getVerdict } = this.props;

        // If the verdict has already been given, fill in the values like this and disable the boxes
        // Otherwise, take the values from the state
        const verdict = getVerdict() ?? {}

        return (
            <li className="whodunit-list-item">
                <div>
                    {text}
                </div>
                <div>
                    <input
                        type="number"
                        min="0"
                        max="100"
                        name={name}
                        value={verdict[name] ?? value}
                        onChange={handleChange}
                        className="whodunit-input"
                        disabled={getVerdict() ?? false}
                    />
                %
                </div>
            </li>
        )
    }
}
