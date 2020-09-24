import React, { Component, Fragment } from 'react';
import PersonalClues from './clues/PersonalClues';
import NextStageButton from '../general-ui/NextStageButton';

export default class IndependentInvestigation extends Component {
    render() {
        const { player, stage } = this.props;

        if (stage.name == "independent_investigation") {
            return (
                <div>
                    <PersonalClues player={player} />
                    <NextStageButton player={player} />
                </div>
            )
        } else {
            return (<Fragment></Fragment>)
        }

    }
}
