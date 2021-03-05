import React, { Component } from 'react';
import PoliceClues from '../../../general/clues/PoliceClues';
import PersonalClues from '../../../general/clues/PersonalClues';
import SummaryInvestigation from '../../../general/images/SummaryInvestigation';
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'

export default class SummaryClues extends Component {
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min, round, game } = this.props;

        return (
            <div>
                <h3>Summary of the Clues</h3>
                <SummaryInvestigation />
                <br />
                <p>You have been presented with all the clues. Below is a presentation of all the clues available to you.</p>
                <p>These clues will be presented again during the discussion phase, but please make sure you are familiar with them now.</p>

                <h4>Police information (shared by all three players)</h4>
                <PoliceClues />
                <h4>Your independent investigation (unique to you)</h4>
                <PersonalClues player={player} round={round} game={game} />

                <br />
                <p>On the next page, you will be asked for your initial verdict as to who is responsible for the collision.</p>
                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )
    }
}
