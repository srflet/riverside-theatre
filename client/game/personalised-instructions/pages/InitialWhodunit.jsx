import React, { Component } from 'react';
import PoliceClues from '../../../general/clues/PoliceClues';
import PersonalClues from '../../../general/clues/PersonalClues';
import Whodunit from '../../../general/whodunit/Whodunit';

export default class InitialWhodunit extends Component {
    render() {
        const { player, round, game } = this.props;

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

                <p>Given the information above, Mr. Lee has asked you to provide your initial verdict as to which of the people described above you think was responsible for the collision and caused the death of his daughter?</p>
                <Whodunit player={player} whichVerdict={"initial"} />

                <div className="game-instructions">
                    <div>
                        <strong><u>Note:</u></strong> This is only your <strong>initial verdict.</strong> After the discussion phase you will provide your <strong>final verdict</strong> which might be different.
                    </div>
                </div>

            </div>
        )
    }
}
