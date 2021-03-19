import React, { Component } from 'react';
import PoliceClues from '../../../general/clues/PoliceClues';
import PersonalClues from '../../../general/clues/PersonalClues';
import SummaryInvestigation from '../../../general/images/SummaryInvestigation';

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'

// SHOW PARTICIPANT ALL THE CLUES THEY HAVE ACCESS TO

export default class SummaryClues extends Component {
    // Scroll to the top when this component starts
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
