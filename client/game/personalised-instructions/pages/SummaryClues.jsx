import React, { Component } from 'react';
import PoliceClues from '../../../intro/PoliceClues';
import PersonalClues from '../../clues/PersonalClues';
import SummaryInvestigation from '../../general-ui/decoration-img/SummaryInvestigation';

export default class SummaryClues extends Component {
    render() {
        const { player, round, game } = this.props;

        return (
            <div>
                <h3>Summary of the Clues</h3>
                <SummaryInvestigation />
                <br />
                <p>
                    You have been presented with all the clues. Below is a presentation of all the clues available to you.
                </p>
                <p>
                    These clues will be presented again during the discussion phase, but please make sure you are familiar with them now.
                </p>
                <h4>Police notes (shared by all three players)</h4>
                <PoliceClues />
                <h4>Your own investigation (unique to you)</h4>
                <PersonalClues player={player} round={round} game={game} />
                <br />
            </div>
        )
    }
}
