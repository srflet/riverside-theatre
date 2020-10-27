import React, { Component } from 'react';
import WhodunitQuestion from '../../../surveys/whodunit/WhodunitQuestion';

export default class InitialWhodunit extends Component {
    state = { whodunit: "" }

    handleWhodunitChange = e => {
        this.setState({ whodunit: e.currentTarget.value });
    }

    handleWhodunitSubmit = e => {
        e.preventDefault();

        if (this.state.whodunit === "") {
            alert("You need to select an answer");
        } else {
            this.props.player.set("initialWhodunit", this.state.whodunit);
        }
    }

    render() {
        const { player, previousPage, nextPage } = this.props;

        return (
            <div>
                <h2>First Verdict</h2>

                {/*If the player has already given their answer, show thank you message. Othwerwise, show the whodunnit quiz */}
                {player.get("initialWhodunit") !== ""
                    ? <div><p>Thank you for providing your first verdict: {player.get("initialWhodunit")}. </p></div>
                    : <div>
                        <p>Given the information above, which of the people described above do you think was responsible for the collision and caused the death of Mr. Lee’s daughter?</p>
                        <WhodunitQuestion player={player} handleChange={this.handleWhodunitChange} />
                        <div className="button-holder">
                            <button onClick={this.handleWhodunitSubmit} disabled={player.get("initialWhodunit") !== ""}>Give my answer</button>
                        </div>
                        <br />
                        <p style={{ textAlign: "center" }}>
                            You need to provide your answer before you can go on to the next page. Careful, once you have provided your answer you cannot change it!
                        </p>
                    </div>
                }

                <p className="button-holder">
                    <button type="button" onClick={previousPage}>
                        Previous
                    </button>
                    &emsp;
                    <button type="button" onClick={nextPage} disabled={player.get("initialWhodunit") === ""}>
                        Next
                    </button>
                </p>
            </div>
        )
    }
}
