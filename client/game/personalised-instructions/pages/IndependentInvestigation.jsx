import React, { Component } from 'react';
import PersonalClues from '../../../general/clues/PersonalClues';
import InvestigationImg from '../../../general/images/InvestigationImg';

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'

// SHOW PARTICIPANTS THEIR UNIQUE CLUES

export default class IndependentInvestigation extends Component {
    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min, round, game } = this.props;

        return (
            <div>
                <h3>Your Independent Investigation </h3>

                <InvestigationImg />
                <br />

                <p>
                    In addition to clues from the police’s investigation, which is shared by the three players (including you), you conducted your own investigations that produced the following clues that are UNIQUE to you.
                </p>
                <p>
                    <strong><u>Note that the other two players did their own investigations and have COMPLETELY different sets of clues.</u></strong>
                </p>
                <p>Please read through them carefully, but there is no need to write them down – they will be available later when needed.</p>
                <PersonalClues player={player} round={round} game={game} />
                <br />
                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )

    }
}
