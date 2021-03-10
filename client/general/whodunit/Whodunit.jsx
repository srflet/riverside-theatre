import React, { Component } from 'react'

export default class Whodunit extends Component {
    state = { whodunit: "" }

    handleChange = e => {
        this.setState({ whodunit: e.currentTarget.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        const { player, whichVerdict } = this.props;
        const { whodunit } = this.state;
        const dbWhodunit = whichVerdict === "initial" ? "initialWhodunit" : "finalWhodunit";

        player.set(dbWhodunit, whodunit);
    }

    render() {
        const { player, whichVerdict } = this.props;
        const { whodunit } = this.state;
        const dbWhodunit = whichVerdict === "initial" ? "initialWhodunit" : "finalWhodunit";
        const verdict = player.get(dbWhodunit) ?? "";

        return verdict === ""
            ? (
                <div>
                    <div>
                        {player.get("whodunit-order").map((value, index) =>
                            <WhodunitInput key={index} handleChange={this.handleChange} value={value} />
                        )}
                    </div>

                    <p className="button-holder">
                        <button onClick={this.handleSubmit} disabled={whodunit === ""}>Give my verdict</button>
                    </p>
                </div>

            )
            : (
                <div>
                    <p><strong>Thank you for providing your {whichVerdict} verdict, {verdict}, to Mr. Lee.</strong></p>
                </div>
            )
    }
}

class WhodunitInput extends Component {
    render() {
        const { handleChange, value } = this.props;

        return (
            <div style={{ margin: "5px 0" }}>
                <input
                    type="radio"
                    name="whodunit"
                    value={this.props.value}
                    onChange={handleChange}
                    style={{ transform: "scale(1.5)" }}
                />
                <span style={{ margin: "0 10px" }}>{value}</span>
                <br />
            </div>
        )
    }
}
