import React, { Component, Fragment } from 'react';
import PoliceClues from '../../intro/PoliceClues';
import PersonalClues from './clues/PersonalClues';
import NextStageButton from '../general-ui/NextStageButton';

export default class SummaryClues extends Component {

    render() {
        const { player, stage } = this.props;

        if (stage.name == "summary_clues") {
            return (
                <div>
                    <PoliceClues />
                    <PersonalClues player={player} />
                    <NextStageButton player={player} />
                </div>
            )
        } else {
            return (<Fragment></Fragment>)
        }
    }
}
