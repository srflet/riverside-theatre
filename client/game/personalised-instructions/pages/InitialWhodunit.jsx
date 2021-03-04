import React, { Component } from 'react';
import WhodunitQuestion from '../../../general/question-formats/whodunit/WhodunitQuestion';
import PoliceClues from '../../../general/clues/PoliceClues';
import PersonalClues from '../../../general/clues/PersonalClues';

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
        const { player, previousPage, nextPage, round, game } = this.props;

        return (
            <div>
                <h3>Summary of clues and initial verdict</h3>
                <p>
                    You have been presented with all the clues. Below is a presentation of all the clues available to you.
                </p>

                <h4>Police notes (shared by all three players)</h4>
                <PoliceClues />

                <h4>Your own investigation (unique to you)</h4>
                <PersonalClues player={player} round={round} game={game} />

                <h4>Giving your verdict</h4>
                {/*If the player has already given their answer, show thank you message. Othwerwise, show the whodunnit quiz */}
                {player.get("initialWhodunit") !== ""
                    ? <div>
                        <p><strong>Thank you for providing your initial verdict, {player.get("initialWhodunit")}, to Mr. Lee.</strong></p>
                        <p>Please click 'Next' to continue.</p>
                    </div>
                    : <div>
                        <p>Given the information above, Mr. Lee has asked you to provide your initial verdict as to which of the people described above you think was responsible for the collision and caused the death of his daughter?</p>
                        <WhodunitQuestion player={player} handleChange={this.handleWhodunitChange} />
                        <div className="button-holder">
                            <button onClick={this.handleWhodunitSubmit} disabled={player.get("initialWhodunit") !== ""}>Give my answer</button>
                        </div>
                        <br />
                        {/*                         <div className="game-instructions">
                            <div>
                                <strong>Note:</strong> You need to provide your initial verdict before you can go on to the next page. Careful, once you have provided your initial verdict you cannot change it.
                            </div>
                        </div> */}
                    </div>
                }

                <div className="game-instructions">
                    <div>
                        <strong><u>Note:</u></strong> This is only your <strong>initial verdict.</strong> After the discussion phase you will provide your <strong>final verdict</strong> which might be different.
                    </div>
                </div>

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
