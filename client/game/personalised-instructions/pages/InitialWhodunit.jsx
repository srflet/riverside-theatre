import React, { Component } from 'react';
import WhodunitQuestion from '../../../surveys/whodunit/WhodunitQuestion';
import PoliceClues from '../../../intro/PoliceClues';
import PersonalClues from '../../clues/PersonalClues';

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
                <h3>Initial Verdict</h3>

                {/*If the player has already given their answer, show thank you message. Othwerwise, show the whodunnit quiz */}
                {player.get("initialWhodunit") !== ""
                    ? <div><p>Thank you for providing your initial verdict, {player.get("initialWhodunit")}, to Mr. Lee. </p></div>
                    : <div>
                        <h4>Reminder: Police notes</h4>
                        <PoliceClues />
                        <h4>Reminder: Your own investigation</h4>
                        <PersonalClues player={player} round={round} game={game} />
                        <h4>Giving your verdict</h4>
                        <p>Given the information above, Mr. Lee has asked you to provide your initial verdict as to which of the people described above you think was responsible for the collision and caused the death of his daughter?</p>
                        <WhodunitQuestion player={player} handleChange={this.handleWhodunitChange} />
                        <div className="button-holder">
                            <button onClick={this.handleWhodunitSubmit} disabled={player.get("initialWhodunit") !== ""}>Give my answer</button>
                        </div>
                        <br />
                        <div className="game-instructions">
                            <div>
                                <strong>Note:</strong> You need to provide your answer before you can go on to the next page. Careful, once you have provided your answer you cannot change it!
                            </div>
                        </div>
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
