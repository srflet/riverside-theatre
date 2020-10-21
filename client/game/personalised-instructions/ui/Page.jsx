import React, { Component } from 'react';

//Importing the pages
import IndependentInvestigation from '../pages/IndependentInvestigation';
import SummaryClues from '../pages/SummaryClues';
import IntroDiscussion from '../pages/IntroDiscussion';
import Incentives from '../pages/Incentives'
import PresComStruct from '../pages/PresComStruct';
import InitialWhodunit from '../pages/InitialWhodunit';
import TestIncentives from '../pages/TestIncentives';
import TestComStruct from '../pages/TestComStruct';

export default class Page extends Component {
    render() {
        const { currentPage, round, player, game, previousPage, nextPage } = this.props;

        if (currentPage === 0) {
            return (
                <IndependentInvestigation player={player} round={round} game={game} />
            )
        } else if (currentPage === 1) {
            return (
                <SummaryClues player={player} round={round} game={game} />
            )
        } else if (currentPage === 2) {
            return (
                <InitialWhodunit player={player} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 3) {
            return (
                <IntroDiscussion />
            )
        } else if (currentPage === 4) {
            return (
                <Incentives player={player} game={game} />
            )
        } else if (currentPage === 5) {
            return (
                <TestIncentives player={player} previousPage={previousPage} nextPage={nextPage} />
            )
        } else if (currentPage === 6) {
            return (
                <PresComStruct round={round} player={player} game={game} />
            )
        } else if (currentPage === 7) {
            return (
                <TestComStruct player={player} previousPage={previousPage} nextPage={nextPage} />
            )
        }
    }
}
