import React, { Component } from 'react';
import PersonalClues from '../../clues/PersonalClues';
import InvestigationImg from '../../general-ui/decoration-img/InvestigationImg';

export default class IndependentInvestigation extends Component {
    render() {
        const { player } = this.props;

        return (
            <div>
                <h3> Independent Investigation </h3>

                <InvestigationImg />
                <br />

                <p>
                    In addition to clues from the police’s investigation, which is shared by the three PIs (including you), you conducted your own investigations that produced the following clues.
                </p>
                <p>
                    <strong><u>Note that the other two PIs did their own investigations and have different sets of clues.</u></strong>
                </p>
                <p>
                    <strong><u>Only ONE piece of the clues you have below is available to another PI. In other words, in the 4 clues below, 3 of them is unique to you, and the remaining one is also known by another participant.</u></strong>
                </p>
                <p>Please read through them carefully, but there is no need to write them down – they will be available later.</p>
                <PersonalClues player={player} />
            </div>
        )

    }
}
