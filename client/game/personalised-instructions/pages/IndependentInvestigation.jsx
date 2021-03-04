import React, { Component } from 'react';
import PersonalClues from '../../../general/clues/PersonalClues';
import InvestigationImg from '../../../general/images/InvestigationImg';

export default class IndependentInvestigation extends Component {
    render() {
        const { player, round, game } = this.props;

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
                <p>Please read through them carefully, but there is no need to write them down – they will be available later.</p>
                <PersonalClues player={player} round={round} game={game} />
                <br />
            </div>
        )

    }
}
