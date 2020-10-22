import React, { Component } from 'react';
import PoliceClues from '../../../intro/PoliceClues';
import PersonalClues from '../../clues/PersonalClues';
import CarCrashImg from '../../general-ui/decoration-img/CarCrashImg';

export default class SummaryClues extends Component {

    render() {
        const { player, round, game } = this.props;

        return (
            <div>
                <h3>Summary of the Clues</h3>
                <p>
                    You have been presented with all the clues. Below is a presentation of all the clues available to you. <br />
                    These clues will be presented again during the discussion phase, but please make sure you are familiar with them now.
                </p>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <div>
                        <h4>Police notes (shared by all three PIs)</h4>
                        <PoliceClues />
                        <h4>Your own investigation (mostly unique to you)</h4>
                        <PersonalClues player={player} round={round} game={game} />
                    </div>
                    <div style={{ marginLeft: "2rem" }}>
                        <CarCrashImg />
                    </div>
                </div>
            </div>

        )
    }
}
