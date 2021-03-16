import React, { Component } from 'react'

export default class Whodunit extends Component {
    state = {
        Smith: 0,
        son: 0,
        Davis: 0,
        Anderson: 0
    }

    handleChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }

    getVerdict = () => {
        const { player, whichVerdict } = this.props;
        const dbWhodunit = whichVerdict === "initial" ? "initialWhodunit" : "finalWhodunit";
        return player.get(dbWhodunit)
    }

    handleSubmit = e => {
        e.preventDefault();

        const { player, whichVerdict } = this.props;

        const whodunit = this.state;
        const dbWhodunit = whichVerdict === "initial" ? "initialWhodunit" : "finalWhodunit";

        player.set(dbWhodunit, whodunit);
    }

    howManyPer = () => {

        const whodunit = this.state;
        const sumOfVerdicts = Object.keys(whodunit).map(key => {
            return whodunit[key]
        }).reduce((total, value) => {
            return Number(total) + Number(value)
        })

        return sumOfVerdicts
    }

    render() {
        const { player, whichVerdict } = this.props;
        const howManyPer = this.howManyPer()

        return (
            <div>
                <div>
                    <p className="whodunit-instructions-1">
                        There are four potential suspects for the collision, but only one of them is responsibile for the collision. For each suspect, please inform Mr Lee of how probable you think it is that they are responsible for the collision. Split a 100% between these four suspect by writing the probability of them being responsible for the collison in the box next to their name.
                    </p>
                    <p className="whodunit-instructions-2">
                        For example, if you think they are all equally as likely to have caused the collision, then write 25 next to each of their names. However, if you think one suspect is more likely to be responsible than another, this would decrease the likelihood of the others being responsible (i.e., increase one number and decrease some or all of the others). If you think it is impossible for a suspect to be responsible for the collision you would allocate them a 0. Hence, the total must be 100.
                    </p>
                    <ul>
                        {player.get("whodunit-order").map((person, index) =>
                            <WhodunitInput
                                key={index}
                                handleChange={this.handleChange}
                                text={person.text} name={person.name}
                                value={this.state[person.name]}
                                getVerdict={this.getVerdict}
                            />
                        )}
                    </ul>
                </div>

                {this.getVerdict()
                    ? <div className="justify-center"><p className="whodunit-thankyou">Thank you for providing your {whichVerdict} verdict to Mr Lee.</p></div>
                    : <>
                        <div className="justify-center">
                            <p className={howManyPer !== 100 ? "whodunit-total whodunit-red" : "whodunit-total whodunit-green"}>
                                You have allocated {howManyPer}% {howManyPer !== 100 && "- Your allocations between the suspects should be equal to 100%"}!
                            </p>
                        </div>

                        <p className="button-holder">
                            <button onClick={this.handleSubmit} disabled={howManyPer !== 100}>Give my verdict</button>
                        </p>
                    </>
                }

            </div>
        )
    }
}

class WhodunitInput extends Component {
    render() {
        const { handleChange, text, name, value, getVerdict } = this.props;
        const verdict = getVerdict() ?? {}

        return (
            <li className="whodunit-list-item">
                <input
                    type="number"
                    max="100"
                    name={name}
                    value={verdict[name] ?? value}
                    onChange={handleChange}
                    className="whodunit-input"
                    disabled={getVerdict() ?? false}
                />
                &emsp;
                {text}
            </li>
        )
    }
}
